import ListElement from "./ListElement.js";

const ForcastReport = ({ forcastData }) => {
  return (
    <section className="ForcastSection">
      {forcastData.list && (
        <>
          <h2>Weather Forcast:</h2>
          {forcastData.list && <ListElement forcast={forcastData.list} />}
        </>
      )}
    </section>
  );
};

export default ForcastReport;
