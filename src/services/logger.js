import axios from "axios";

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2dHUyNjYwMkB2ZWx0ZWNoLmVkdS5pbiIsImV4cCI6MTc4MTY4MjQ5MiwiaWF0IjoxNzgxNjgxNTkyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTI5MTMzNTctYzQzYi00MmQ0LTliMTAtOTU1YmIzNmYwMDc1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZCBqb3NoaXRoYSIsInN1YiI6ImRiM2QxZTIzLWEwN2UtNGM3OC05NmMyLWJjMTEwNTQ1NGI3NCJ9LCJlbWFpbCI6InZ0dTI2NjAyQHZlbHRlY2guZWR1LmluIiwibmFtZSI6ImQgam9zaGl0aGEiLCJyb2xsTm8iOiJ2dHUyNjYwMiIsImFjY2Vzc0NvZGUiOiJqdUZwaHYiLCJjbGllbnRJRCI6ImRiM2QxZTIzLWEwN2UtNGM3OC05NmMyLWJjMTEwNTQ1NGI3NCIsImNsaWVudFNlY3JldCI6Indkc2ZTRXVDU0tETkNkck0ifQ.7qfFHUbSXfngETtFXYQ1_tmqi6UT0HoXrqyElpDuUts";

export const Log = async (
  stack,
  level,
  packageName,
  message
) => {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log("Log sent successfully");
  } catch (error) {
    console.log("LOG PAYLOAD:", {
  stack,
  level,
  package: packageName,
  message,
});

console.error(
  "Log Error:",
  JSON.stringify(error.response?.data, null, 2)
);
  }
};