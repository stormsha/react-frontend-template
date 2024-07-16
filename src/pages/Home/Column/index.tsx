import {useState, useEffect} from "react";
import {Column} from "@ant-design/plots";
import http from "@/api/fetch.ts";

const DemoColumn = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    const url = "https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json"
    http.get(url).then((response) => {
      setData(response)
    }).catch((error) => {
      console.error('Error fetching info:', error);
    });
  };

  const config = {
    data,
    xField: "city",
    yField: "value",
    seriesField: "type",
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };
  return <Column style={{height: '99%'}} {...config} />;
};

export default DemoColumn;
