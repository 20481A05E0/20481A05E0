const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/trains', async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  

const trainSchedules = response.data;

// Filter and sort the train schedules
const filteredSchedules = trainSchedules.filter(
  (schedule) =>
    isTrainWithinNext12Hours(schedule.departureTime) &&
    !isTrainWithinNext30Minutes(schedule.departureTime)
);

const orderedSchedules = orderTrainSchedules(filteredSchedules);

res.json(orderedSchedules);
} catch (error) {
console.error('Error fetching train schedules:', error.message);
res.status(500).json({ error: 'Failed to fetch train schedules' });
}
});
function isTrainWithinNext12Hours(departureTime) {
const now = new Date();
const twelveHoursLater = new Date(now.getTime() + 12 * 60 * 60 * 1000);
const trainDepartureTime = new Date(departureTime);
return trainDepartureTime > now && trainDepartureTime < twelveHoursLater;
}
function isTrainWithinNext30Minutes(departureTime) {
const now = new Date();
const thirtyMinutesLater = new Date(now.getTime() + 30 * 60 * 1000);
const trainDepartureTime = new Date(departureTime);
return trainDepartureTime > now && trainDepartureTime < thirtyMinutesLater;
}
function orderTrainSchedules(trainSchedules) {
return trainSchedules.sort((a, b) => {
if (a.price < b.price) return -1;
if (a.price > b.price) return 1;
if (a.seatsAvailable > b.seatsAvailable) return -1;
if (a.seatsAvailable < b.seatsAvailable) return 1;
const departureA = new Date(a.departureTime);
const departureB = new Date(b.departureTime);
if (departureA > departureB) return -1;
if (departureA < departureB) return 1;

return 0;
});
}
app.listen(port, () => {
console.log(Server is running on port ${port});
});