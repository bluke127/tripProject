import Table from "@/components/Table/index";
import response from "@/mock/response";
import React, { useEffect, useId, useMemo } from "react";

export default function TableComponentTest() {
  const id = useId();
  const colData = useMemo(() => {
    return [
      { tag: "name", label: "이름" },
      { tag: "id", label: "라벨" },
      { tag: "etc", label: "기타" }
    ];
  }, [response]);
  const rowData = useMemo(() => {
    return response.map(res => {
      return res;
    });
  }, [response]);
  return (
    <div>
      xx
      <Table id={id} columnsData={colData} rowsData={rowData} />
    </div>
  );
}
