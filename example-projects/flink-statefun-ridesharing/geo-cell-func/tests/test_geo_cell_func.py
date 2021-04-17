import geo_cell_func.geo_cell_func as geo_cell_func
from fastapi.testclient import TestClient
from states_protobuf_generated.ridesharing_pb2 import \
    GeoCellState, GetDriver, LeaveCell, JoinCell

client = TestClient(geo_cell_func.app)


def test_get_driver():
    pb = GetDriver()
    data = pb.SerializeToString()
    response = client.post(geo_cell_func.API_ROUTE,
                           data=data,
                           headers={
                               "Content-Type": "application/octet-stream",
                           })
    assert response.status_code == 200
