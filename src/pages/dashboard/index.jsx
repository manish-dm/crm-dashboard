import { useEffect, useState } from "react";
import "./index.css";

import Overview from "./Overview";
import SalePercent from "./SalePercent";
import TimeLine from "./TimeLine";

const DashBoardPage = () => {
  const [loading, setLoading] = useState(true);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(undefined);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Overview loading={loading} />
      <SalePercent loading={loading} />
      <TimeLine loading={loading} />
    </div>
  );
};

export default DashBoardPage;
