import React from "react";
import { List } from "antd";

/**
 * Component to show timeznes.
 * @returns {JSX.Element} A react component for showing a list of timezones.
 */
export default function Timezone(props: { timezonesInMinutes: number[] }) {
  const timezones = props.timezonesInMinutes;

  return (
	<>
	<List
      header={<div>Timezones</div>}
      bordered
      dataSource={timezones.map(getTimeZone)}
      renderItem={(item) => (
        <List.Item>
          {item}
        </List.Item>
      )}
    />
	</>
  );
}

/**
 * Gets timezone string
 * @param timeZonesInMinutes Time zone values in minutes
 * @returns Timezone sting in 'UTC + XX:XX' format
 */
function getTimeZone(timeZonesInMinutes: number): string {
    if (!timeZonesInMinutes) return 'UTC';
    const hour = Math.floor(Math.abs(timeZonesInMinutes)/60);
    const minutes = Math.abs(timeZonesInMinutes)%60;
    return `UTC ${timeZonesInMinutes > 0 ? '+' : '-'} ${hour}:${("0" + minutes).slice(-2)}`;
  }