import {
  ColorSet,
  Container,
  Graphics,
  JSONParser,
  Label,
  Root,
  RoundedRectangle,
  color,
  net,
  p100,
  p50,
} from "@amcharts/amcharts5/index";
import {
  MapChart,
  MapPolygonSeries,
  geoMercator,
} from "@amcharts/amcharts5/map";
import { useEffect, useRef } from "react";

import am5geodata_data_countries2 from "@amcharts/amcharts5-geodata/data/countries2";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

export const Maps = () => {
  const chartRef = useRef(null);

  let countries = useRef({
    US: {
      c1: "#D5F6E5",
      c2: "#CCD97E",
      value: 23,
      name: "United States of America",
    },
    CN: { c1: "#E7F68E", c2: "#E7F68E", value: 20, name: "China" },
    UK: {
      c1: "#F3FBC7",
      c2: "#F3FBC7",
      value: 18,
      name: "United Kingdom",
    },
    NL: {
      c1: "#BCD9CA",
      c2: "#BCD9CA",
      value: 18,
      name: "Netherlands",
    },
    AU: {
      c1: "#D5F6E5",
      c2: "#D5F6E5",
      value: 11,
      name: "Australia",
    },
    SA: {
      c1: "#E7F68E",
      c2: "#EAFBF2",
      value: 9,
      name: "Saudi Arabia",
    },
    AE: {
      c1: "#A3A3A3",
      c2: "#A3A3A3",
      value: 18,
      name: "United Arab Emirates",
    },
    ID: { c1: "#CCD97E", c2: "#E7E7E7", value: 0, name: "Indonesia" },
    CA: { c1: "#E7F68E", c2: "", value: 0, name: "Canada" },
    MX: { c1: "#D5F6E5", c2: "", value: 0, name: "Mexico" },
    BR: { c1: "#D5F6E5", c2: "", value: 0, name: "Brazil" },
    EG: { c1: "#D5F6E5", c2: "", value: 0, name: "Egypt" },
    SD: { c1: "#CCD97E", c2: "", value: 0, name: "Sudan" },
    IQ: { c1: "#CCD97E", c2: "", value: 0, name: "Iraq" },
    OM: { c1: "#BCD9CA", c2: "", value: 0, name: "Oman" },
    MN: { c1: "#CCD97E", c2: "", value: 0, name: "Mongolia" },
    IN: { c1: "#CCD97E", c2: "", value: 0, name: "India" },
    KZ: { c1: "#D5F6E5", c2: "", value: 0, name: "Kazakhstan" },
    UZ: { c1: "#BCD9CA", c2: "", value: 0, name: "Uzbekistan" },
    KG: { c1: "#BCD9CA", c2: "", value: 0, name: "Kyrgyzstan" },
  });

  useEffect(() => {
    let root = Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let colors = ColorSet.new(root, {});

    let chart = root.container.children.push(
      MapChart.new(root, {
        panX: "rotateX",
        projection: geoMercator(),
      })
    );

    let worldSeries = chart.series.push(
      MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
      })
    );

    worldSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: color(0xaaaaaa),
      templateField: "polygonSettings",
    });

    worldSeries.mapPolygons.template.states.create("hover", {
      fill: color("#929090"),
    });

    worldSeries.mapPolygons.template.events.on("click", (ev) => {
      let dataItem = ev.target.dataItem;
      let data = dataItem.dataContext;
      let zoomAnimation = worldSeries.zoomToDataItem(dataItem);

      Promise.all([
        zoomAnimation.waitForStop(),
        net.load(
          "https://cdn.amcharts.com/lib/5/geodata/json/" +
            data.map +
            ".json",
          chart
        ),
      ]).then((results) => {
        let geodata = JSONParser.parse(results[1].response);
        countrySeries.setAll({
          geoJSON: geodata,
          fill: data.polygonSettings.fill,
        });

        countrySeries.show();
        worldSeries.hide(100);
        backContainer.show();
      });
    });

    let countrySeries = chart.series.push(
      MapPolygonSeries.new(root, {
        visible: false,
      })
    );

    countrySeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: color(0xaaaaaa),
    });

    countrySeries.mapPolygons.template.states.create("hover", {
      fill: colors.getIndex(9),
    });

    let data = [];
    for (var id in am5geodata_data_countries2) {
      if (
        Object.prototype.hasOwnProperty.call(
          am5geodata_data_countries2,
          id
        )
      ) {
        let country = am5geodata_data_countries2[id];

        if (country.maps.length) {
          data.push({
            id: id,
            map: country.maps[0],
            polygonSettings: {
              fill: color(countries.current[id]?.c1 || "#A3A3A3"),
            },
          });
        }
      }
    }

    worldSeries.data.setAll(data);

    // Add button to go back to continents view
    let backContainer = chart.children.push(
      Container.new(root, {
        x: p100,
        centerX: p100,
        dx: -10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        y: 30,
        interactiveChildren: false,
        layout: root.horizontalLayout,
        cursorOverStyle: "pointer",
        background: RoundedRectangle.new(root, {
          fill: color(0xffffff),
          fillOpacity: 0.2,
        }),
        visible: false,
      })
    );

    backContainer.children.push(
      Label.new(root, {
        text: "Back to world map",
        centerY: p50,
      })
    );

    backContainer.children.push(
      Graphics.new(root, {
        width: 32,
        height: 32,
        centerY: p50,
        fill: color(0x555555),
        svgPath:
          "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8",
      })
    );

    backContainer.events.on("click", function () {
      chart.goHome();
      worldSeries.show();
      countrySeries.hide();
      backContainer.hide();
    });

    return () => {
      root.dispose(); //
    };
  }, [countries]);

  return (
    <>
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-span-4">
          <div
            id="chartdiv"
            className="w-full min-h-[500px] bg-[#F8F8F8] rounded-2xl"
            ref={chartRef}
          ></div>
        </div>
        <div className="col-span-2">
          <div>
            <h5 className="leading-6 text-gray-500">
              Total Customers
            </h5>
            <h1 className="text-4xl">17,850</h1>
            <hr className="my-4 border-gray-300" />
          </div>
          <ul className="space-y-4">
            {Object.entries(countries.current).map((country, i) => {
              return country[1].value > 1 ? (
                <li
                  key={i}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <span
                      className="block w-5 h-5 mr-3 rounded-md"
                      style={{
                        backgroundColor: country[1].c2,
                      }}
                    ></span>
                    <span className="text-gray-500">
                      {country[1].name}
                    </span>
                  </div>
                  <div className="mr-2 font-bold text-gray-800">
                    {country[1].value}%
                  </div>
                </li>
              ) : (
                ""
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
