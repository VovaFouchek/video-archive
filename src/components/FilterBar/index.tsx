import { Input, Select, DatePicker, Button, Typography, Form } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { Filters } from "@/shared/types";

const { RangePicker } = DatePicker;
const { Text } = Typography;
const { Item } = Form;

interface FilterBarProps {
  onApplyFilters: (filters: Filters) => void;
}

const FilterBar = ({ onApplyFilters }: FilterBarProps) => {
  const [form] = Form.useForm();

  const defaultFilters: Filters = {
    videoType: null,
    group: "",
    dateRange: [null, null],
  };

  const onApply = () => {
    const values = form.getFieldsValue();

    onApplyFilters(values);
  };

  const onReset = () => {
    form.resetFields();
    onApplyFilters(defaultFilters);
  };

  return (
    <div>
      <Form form={form} initialValues={defaultFilters} layout="vertical">
        <div style={{ textAlign: "right", marginBottom: "8px" }}>
          <Button type="link" onClick={onReset} icon={<ReloadOutlined />}>
            Reset filters
          </Button>
        </div>

        <Item
          label={<Text type="secondary">Video Type (optional)</Text>}
          name="videoType"
        >
          <Select placeholder="Choose video type">
            <Select.Option value="Video File">Video File</Select.Option>
            <Select.Option value="Live Stream">Live Stream</Select.Option>
            <Select.Option value="Recording">Recording</Select.Option>
          </Select>
        </Item>

        <Item
          label={<Text type="secondary">Group (optional)</Text>}
          name="group"
        >
          <Input placeholder="video name" />
        </Item>

        <Item
          label={<Text type="secondary">Date uploaded range</Text>}
          name="dateRange"
        >
          <RangePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
        </Item>

        <Item
          style={{
            display: "flex",
            justifyContent: "right",
            marginBottom: "0",
          }}
        >
          <Button
            onClick={onApply}
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#580B82", boxShadow: "none" }}
          >
            Apply
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default FilterBar;
