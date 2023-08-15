import {
  Modal,
  Button,
  EditTwoTone,
  Input,
  Select,
  Col,
  InputNumber,
  Row,
  Slider,
  Space,
} from "../antd/antd";
import { useState } from 'react';
import cl from '../styles/Components.module.css'

export default function EditModal({ open, onCancel, record }){
     const [inputValue, setInputValue] = useState(record.result);
     const onChange = (newValue) => {
       setInputValue(newValue);
     };

    return (
      <>
        <Modal
          title="Edit Youtube search path"
          open={open}
          onCancel={onCancel}
          style={{ maxWidth: "400px" }}
        >
          <div className={cl.modal}>
            <Input placeholder={record.title} size="large" disabled />
            <Input placeholder="Edit your search here" size="large" />
            <Select
              size="large"
              showSearch
              style={{ width: "inherit" }}
              placeholder="Sort"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "relevance",
                  label: "Relevance",
                },
                {
                  value: "date",
                  label: "Date",
                },
                {
                  value: "rating",
                  label: "Rating",
                },
                {
                  value: "viewCount",
                  label: "Views",
                },
                {
                  value: "title",
                  label: "Title",
                },
              ]}
            />
            <Row>
              <Col span={12}>
                <Slider
                  style={{ width: "160px" }}
                  min={1}
                  max={25}
                  onChange={onChange}
                  value={typeof inputValue === "number" ? inputValue : 0}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={1}
                  max={20}
                  value={inputValue}
                  onChange={onChange}
                />
              </Col>
            </Row>
          </div>
        </Modal>
      </>
    );
}