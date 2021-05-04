import { stringify } from "querystring";
import React, { FC, useEffect, useState } from "react";
import {
  WeatherData,
  WeatherDataList,
  WeatherDataa,
  WeatherState,
} from "../store/types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { resourceLimits } from "worker_threads";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";


import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip,
} from "@devexpress/dx-react-chart-material-ui";

interface WeatherProps {
  data: WeatherDataList[];
}

const Weather: FC<WeatherProps> = ({ data }) => {
  const data2 = [
    { year: "", population: 0 },
    { year: "", population: 0 },
    { year: "", population: 0 },
    { year: "", population: 0 },
    { year: "", population: 0 },
    { year: "", population: 0 },
    { year: "", population: 0 },
  ];

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const resultc: any = [];
  const handleChange = (event: any) => {
    if (fahrenhit) {
      const celsiusData = chartd.map((item) => {
        item.year = (((item.population - 32) * 5) / 9).toFixed(2) + "C";
        item.population = ((item.population - 32) * 5) / 9;
        return item;
      });

      setChartd(celsiusData);
      console.log(celsiusData);

      setFahrenhit(false);
    }
    if (!fahrenhit) {
      const farhanitData = chartd.map((item) => {
        item.year = ((item.population * 9) / 5 + 32).toFixed(2) + "C";
        item.population = (item.population * 9) / 5 + 32;
        return item;
      });
      setChartd(farhanitData);
      console.log(chartd);
      setFahrenhit(true);
    }
  };

  const changeBarChar = (value: any) => {
    if (fahrenhit) {
      data.map((item) => {
        item.dt_txt = new Date(item.dt_txt).toDateString();
        if (item.dt_txt == value) {
          
          resultc.push({
            year: (item.main.temp * 1.8 - 459.67).toFixed(2) + "F",
            population: item.main.temp * 1.8 - 459.67,
          });
        }
      });
    }

    if (!fahrenhit) {
      data.map((item) => {
        item.dt_txt = new Date(item.dt_txt).toDateString();
        if (item.dt_txt == value) {
          debugger;
          resultc.push({
            year: (item.main.temp - 273.15).toFixed(2) + "C",
            population: item.main.temp - 273.15,
          });
        }
      });
    }
    setChartd(resultc);
  };

  const [fahrenhit, setFahrenhit] = useState(true);
  const [celsius, setCelsius] = useState(false);
  const [chartd, setChartd] = useState(data2);
  const [chartData, setChartData] = useState(data2);

  const [weather, setWeather] = useState([
    {
      dt_text: "",
      temp: 0,
    },
  ]);

  useEffect(() => {
  
    if (data != null) {
      console.log("Hellow i am in Weather");
     
      let localData = data.map((item) => {
        item.dt_txt = new Date(item.dt_txt).toDateString();
        return item;
      });

      const result = [];
      const map = new Map();
      for (const item of localData) {
        if (!map.has(item.dt_txt)) {
          map.set(item.dt_txt, true); // set any value to Map
          result.push({
            dt_text: item.dt_txt,
            temp: item.main.temp,
          });
        }
      }

      setWeather(result);
      changeBarChar(data[0].dt_txt)
    }
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <div className="row">
                <div className="col-md-6">
                  <FormControlLabel
                    value="end"
                    control={
                      <Radio
                        onClick={handleChange}
                        checked={!fahrenhit}
                        color="primary"
                      />
                    }
                    label="Celcius"
                  />
                </div>

                <div className="col-md-6">
                  <FormControlLabel
                    value="end"
                    control={
                      <Radio
                        onClick={handleChange}
                        checked={fahrenhit}
                        color="primary"
                      />
                    }
                    label="Fahrenheit"
                  />
                </div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {weather.map((item) => {
              return (
                <SwiperSlide>
                  <div
                    className="text-left card_b"
                    onClick={() => changeBarChar(item.dt_text)}
                  >
                    <div>
                      <h5>Temp:</h5>
                    </div>
                    <div>
                      <p>
                        {fahrenhit
                          ? (item.temp * 1.8 - 459.67).toFixed(0) + "F"
                          : (item.temp - 273.15).toFixed(0) + "C"}
                      </p>
                    </div>
                    <div>
                      <h5>Date:</h5>
                    </div>
                    <div>
                      <p>{item.dt_text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="container">
          <Paper>
            <Chart data={chartd}>
              <ArgumentAxis />

              <BarSeries valueField="population" argumentField="year" />
              
              <Tooltip />
            </Chart>
          </Paper>
        </div>
      </div>
    </section>
  );
};

export default Weather;
