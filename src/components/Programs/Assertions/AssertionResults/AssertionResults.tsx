import React, { FC, useMemo } from "react";
import AssertionField from "../AssertionField/AssertionField";
import "./AssertionResults.scss";
import trash from "../../../../assets/trash.svg";
const AssertionResults: FC<{
  assertions: { actual: string; predicted: string; isMatching: boolean }[];
  deleteResults: () => void;
}> = ({ assertions, deleteResults }) => {
  const renderResults = useMemo(() => {
    return assertions.map((assertion) => {
      return (
        <div className="assertion-results__item" key={assertion.predicted}>
          <AssertionField
            helperText="Predicted"
            isError={false}
            value={assertion.predicted}
          />
          <AssertionField
            helperText="Actual"
            isError={!assertion.isMatching}
            value={assertion.actual}
          />
        </div>
      );
    });
  }, [assertions]);

  return (
    <div className="assertion-results">
      <div className="assertion-results__header">
        <h2>Assertion results</h2>
        <button onClick={deleteResults}>
          <img src={trash} alt="trash" />
          Delete results
        </button>
      </div>
      {renderResults}
    </div>
  );
};

export default AssertionResults;
