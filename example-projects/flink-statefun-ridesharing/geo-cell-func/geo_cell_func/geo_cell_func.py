import statefun
from statefun.messages import message_builder
from states_protobuf_generated.ridesharing_pb2 import \
    DriverInCell, GeoCellState, GetDriver, LeaveCell, JoinCell

from fastapi import FastAPI
from starlette.requests import Request

FUNCTION_TYPE = 'ride-sharing/geo-cell'
API_ROUTE = '/geo-cell'

GET_DRIVER_PB2_TYPE = statefun.make_protobuf_type(GetDriver)
DRIVER_IN_CELL_PB2_TYPE = statefun.make_protobuf_type(DriverInCell)
JOIN_CELL_PB2_TYPE = statefun.make_protobuf_type(JoinCell)
LEAVE_CELL_PB2_TYPE = statefun.make_protobuf_type(LeaveCell)

functions = statefun.StatefulFunctions()


def get_driver(context: statefun.Context, ):
    caller = context.caller
    drivers_state: GeoCellState = context.storage.drivers
    driver_resp = DriverInCell()
    if drivers_state and len(drivers_state.driver_id) > 0:
        next_driver_id = drivers_state.driver_id[0]
        driver_resp = DriverInCell(driver_id=next_driver_id)

    context.send(
        message_builder(
            target_typename=caller.typename,
            target_id=caller.id,
            value=driver_resp,
            value_type=DRIVER_IN_CELL_PB2_TYPE,
        ))


def add_driver(context: statefun.Context, ):
    driver_id = context.caller.id
    drivers_state: GeoCellState = context.storage.drivers
    if not drivers_state:
        drivers_state = GeoCellState()

    drivers_state.driver_id.append(driver_id)
    context.storage.drivers = drivers_state


def remove_driver(context: statefun.Context, ):
    driver_id = context.caller.id
    drivers_state: GeoCellState = context.storage.drivers
    if not drivers_state:
        return

    drivers_state.driver_id.remove(driver_id)
    context.storage.drivers = drivers_state


@functions.bind(FUNCTION_TYPE)
def invoke(
    context: statefun.Context,
    message: statefun.Message,
):
    if message.is_type(GET_DRIVER_PB2_TYPE):
        get_driver(context)
    elif message.is_type(JOIN_CELL_PB2_TYPE):
        add_driver(context)
    elif message.is_type(LEAVE_CELL_PB2_TYPE):
        remove_driver(context)
    else:
        raise Exception("Unknown message type for message:" + message)


handler = statefun.RequestReplyHandler(functions)
app = FastAPI()


@app.post(API_ROUTE)
async def handle(request: Request):
    data = await request.body()
    resp = await handler.handle_async(data)
    return resp
