import { Modal, Input, Select, Col, InputNumber, Row, Slider } from "antd";
import { useState } from 'react';
import cl from '../styles/Components.module.css';
import { useDispatch } from "react-redux";
import {editFav} from '../../redux/favsSlice'

export default function EditModal({ open, onCancel, record }){
const [prevSearch, setPrevSearch] = useState('')
const [search, setSearch] = useState('');
const [sort, setSort] = useState(record.sort);
const [result, setResult] = useState(record.result);

const onChangeInput = (newValue) => {
  setSearch(newValue);
};

const onChangeSort = (newValue) => {
  setSort(newValue);
};

const onChangeResult = (newValue) => {
  setResult(newValue);
};

const handleSubmit = () => {
  const newData = {
    id: record.id,
    newSearch: search,
    newResult: result,
    newSort: sort,
  };
  dispatch(editFav(newData));
  onCancel();
};

  const dispatch = useDispatch()
  
    return (
      <Modal
        title="Edit Youtube search path"
        open={open}
        onCancel={onCancel}
        style={{ maxWidth: "400px" }}
        onOk={() => handleSubmit()}
      >
        <form className={cl.modal}>
          <Input placeholder={record.title} size="large" disabled />
          <Input
            placeholder="Edit your search here"
            size="large"
            value={search}
            onChange={(e) => onChangeInput(e.target.value)}
          />
          <Select
            size="large"
            showSearch
            style={{ width: "inherit" }}
            placeholder="Sort"
            optionFilterProp="children"
            value={sort}
            onChange={(value) => onChangeSort(value)}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
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
                onChange={onChangeResult}
                value={typeof result === "number" ? result : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={20}
                value={result}
                onChange={onChangeResult}
              />
            </Col>
          </Row>
        </form>
      </Modal>
    );
}