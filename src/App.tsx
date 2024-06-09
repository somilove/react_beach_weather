import { useCallback, useState } from "react"
import axios from "axios";

type Props = {}

const App = (props: Props) => {
  const URL = "http://apis.data.go.kr/1360000/BeachInfoservice";
  const date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("o" + date.getDate()).slice(-2);
  
  const response = axios.get(URL, {
    params: {
      serviceKey: process.env.REACT_APP_SERVIECE_KEY,
      base_data: `${year}${month}${day}`,
    },
  })

  return (
    <div>hello</div>
  )
}

export default App