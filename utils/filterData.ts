const filterData = (activities) => {
  let filteredActivities = [];

  filteredActivities[0] = activities
    .filter((activity) => activity.dateRange === 'year')
    .pop();
  filteredActivities[1] = activities
    .filter((activity) => activity.dateRange === 'month')
    .pop();
  filteredActivities[2] = activities
    .filter((activity) => activity.dateRange === 'week')
    .pop();
  filteredActivities[3] = activities
    .filter((activity) => activity.dateRange === 'today')
    .pop();

  return filteredActivities;
};

const filteredUnits = (activities, unitActivityType) => {
  const sortFunction = (a, b) => {
    if (a.unitType < b.unitType) {
      return -1;
    }
    if (a.unitType > b.unitType) {
      return 1;
    }
    return 0;
  };

  return activities
    .reduce((previousActivities, currentActivity) => {
      const { dateRange, units } = currentActivity;

      units.forEach((unit) => {
        let unitIndex = previousActivities.findIndex(
          (loggedUnit) =>
            loggedUnit.unitSize === unit.unitSize &&
            loggedUnit.unitType === unit.unitType
        );

        if (unitIndex < 0) {
          unitIndex =
            previousActivities.push({
              unitSize: unit.unitSize,
              unitType: unit.unitType,
              year: 0,
              month: 0,
              week: 0,
              today: 0,
            }) - 1;
        }
        previousActivities[unitIndex][dateRange] = unit[unitActivityType];
      });

      return [...previousActivities];
    }, [])
    .sort(sortFunction);
};

export { filterData, filteredUnits };
