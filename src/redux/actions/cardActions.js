import axios from "axios";
import { setAmiibo, setDetail } from "../reducers/cardReducers";

export const CharacterAmiibo = () => async (dispatch, getState) => {
  try {
    // console.log("getState()", getState());
    const response = await axios.get(
      "https://www.amiiboapi.com/api/amiibo/?type=card&showusage",
      {
        headers: { accept: "application/json" },
      }
    );
    const amiiboData = response.data.amiibo.map((item) => ({
      name: item.character,
      image: item.image,
      games: item.gameSeries,
      tail: item.tail,
    }));
    dispatch(setAmiibo(amiiboData));
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

export const DetailCards = (props) => async (dispatch) => {
  // console.log("props", props);
  try {
    const response = await axios.get(
      `https://www.amiiboapi.com/api/amiibo/?character&type=card&showusage&tail=${props.id}`,
      {
        headers: { accept: "application/json" },
      }
    );

    console.log("response data detail", response.data);

    dispatch(setDetail(response.data.amiibo[0]));
    return response.data.amiibo[0];
  } catch (error) {
    console.error("Error fetching data", error);
  }
};
