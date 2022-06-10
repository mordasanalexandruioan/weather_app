export const tempS = (storageTempS, tempStatus, tempC, tempF) => {
  if (storageTempS === null) {
    if (tempStatus) return `${tempC}°C`;
    else return `${tempF}°F`;
  } else if (storageTempS) return `${tempF}°F`;
  else return `${tempC}°C`;
};

export const precipS = (storagePrecipS, precipStatus, precipMM, precipIN) => {
  if (storagePrecipS === null) {
    if (precipStatus) return `${precipMM} mm`;
    else return `${precipIN} in`;
  } else if (storagePrecipS) return `${precipIN} in`;
  else return `${precipMM} mm`;
};
