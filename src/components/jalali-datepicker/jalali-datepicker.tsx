import { Dayjs } from "dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";
import generateJalaliConfig from "./jalali-config/generateJalaliConfig";
import { DatePickerProps, RangePickerProps } from "antd/es/date-picker";

export interface JalaliDatePickerProps extends DatePickerProps {}

interface JalaliRangePickerProps extends RangePickerProps {}

const DatePicker: any = generatePicker<Dayjs>(generateJalaliConfig);
const RangePicker = DatePicker.RangePicker;

const JalaliDatePicker: React.FC<JalaliDatePickerProps> & { RangePicker: React.FC<JalaliRangePickerProps> } = (props) => {
  return <DatePicker {...props} />;
};

JalaliDatePicker.RangePicker = (props) => {
  // You can use your additional props here
  return <RangePicker {...props} />;
};

export { JalaliDatePicker };
