import React from "react";
import { Col, ConfigProvider, Radio, RadioChangeEvent, Row, Space } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import { DirectionType } from "antd/es/config-provider";

// import components
import { JalaliDatePicker, JalaliLocaleListener } from "./components";

function App() {
  const [direction, setDirection] = React.useState<DirectionType>("rtl");
  const [locale, setLocale] = React.useState(fa_IR);

  const changeDirection = (e: RadioChangeEvent) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    console.log("changeDirection: locale:  ", locale);
  };
  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
  };
  function onOk(value: any) {
    console.log("onOk: ", value);
  }

  return (
    <Row justify="center">
      <Col span={18}>
        <Space direction="vertical" size={12}>
          <h2> Ant-Design Jalali Date picker </h2>
          <Space direction="horizontal" size={12}>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>Change direction of components: </span>
              <Radio.Group defaultValue={direction} onChange={changeDirection}>
                <Radio.Button key="ltr" value="ltr">
                  LTR
                </Radio.Button>
                <Radio.Button key="rtl" value="rtl">
                  RTL
                </Radio.Button>
              </Radio.Group>
            </div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginRight: 16 }}>Change locale of components: </span>
              <Radio.Group defaultValue={locale} onChange={changeLocale}>
                <Radio.Button key="en" value={en_US}>
                  EN
                </Radio.Button>
                <Radio.Button key="fa" value={fa_IR}>
                  FA_IR
                </Radio.Button>
              </Radio.Group>
            </div>
          </Space>
          <ConfigProvider locale={locale} direction={direction}>
            <JalaliLocaleListener />
            <Space direction="vertical" size={12}>
              <JalaliDatePicker direction="rtl" onChange={onOk} showTime />
              Jalali RangePicker: <JalaliDatePicker.RangePicker onChange={onOk}  />
              {/* <Calendar /> */}
            </Space>
          </ConfigProvider>
        </Space>
      </Col>
    </Row>
  );
}

export default App;
