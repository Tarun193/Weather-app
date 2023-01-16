import ListItem from "./ListItem";

const filterData = (data) => {
  const newData = [];
  for (let i = 0; i < data.length; i += 8) {
    newData.push(data[i]);
  }
  return newData;
};
const ListElement = ({ forcast }) => {
  const nextFiveDaysForcast = filterData(forcast);
  return (
    <ul>
      {nextFiveDaysForcast.map((item) => {
        return <ListItem key={item.dt_txt} report={item} />;
      })}
    </ul>
  );
};

export default ListElement;
