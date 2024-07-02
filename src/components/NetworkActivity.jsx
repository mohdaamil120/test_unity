

import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest, clearRequests } from '../redux/networkSlice';
import { IoMdWarning } from "react-icons/io";
import { BiSolidMessageSquareX, BiSolidDownArrow } from "react-icons/bi";
import { FaAngleDoubleRight, FaRegStopCircle, FaSearch } from "react-icons/fa";
import { BsSlashCircle } from "react-icons/bs";
import { HiMiniFunnel, HiMiniArrowDownTray } from "react-icons/hi2";
import { IoWifi } from "react-icons/io5";
import { LuArrowUpFromLine } from "react-icons/lu";
import { GiResize } from "react-icons/gi";
import { BiPaste } from "react-icons/bi";


const NetworkActivity = () => {
  const [inputValue, setInputValue] = useState('');
  const [url, setUrl] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedTab, setSelectedTab] = useState('Response');
  const dispatch = useDispatch();
  const requests = useSelector((state) => state.network.requests);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleFetch = async () => {
    try {
      const startTime = performance.now();
      const response = await fetch(url);
      const endTime = performance.now();
      const data = await response.json();
  
      dispatch(addRequest({
        id: Date.now(),
        url: url,
        status: response.status,
        type: response.headers.get('content-type'),
        size: `${(data.size / 1024).toFixed(2)} KB`,
        time: `${(endTime - startTime).toFixed(2)} ms`,
        response: {
          body: data,
          headers: Object.fromEntries(response.headers.entries()),
        },
        request: {
          body: response.headers.get('content-type') === 'application/json' ? JSON.stringify(data) : data,
          headers: Object.fromEntries(new Headers(response.headers).entries()),
        },
      }));
    } catch (error) {
      console.error('Error fetching the URL:', error);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    handleFetch();
  };

  const handleNameClick = (index) => {
    setSelectedRequest(index);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
 };

  return (
    <Container>
      <Fetch>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleSubmit}>Fetch</button>
      </Fetch>
      <Header>
        <div>
          <TabBar>
            <TabItem><GiResize /></TabItem>
            <TabItem><BiPaste /></TabItem>
            <TabItem> | </TabItem>
            <TabItem>Elements</TabItem>
            <TabItem>Console</TabItem>
            <TabItem>Network</TabItem>
            <TabItem>Sources</TabItem>
            <TabItem>Performance</TabItem>
            <TabItem>Memory</TabItem>
            <TabItem>Application</TabItem>
            <TabItem>Lighthouse</TabItem>
            <FaAngleDoubleRight size={20} />
          </TabBar>
        </div>
        <div>
          <span><IoMdWarning size={20} /> 67 <BiSolidMessageSquareX size={20} /> 1</span>
        </div>
      </Header>

      <FilterBar>
        <FaRegStopCircle size={20} />
        <BsSlashCircle size={20} /> |
        <HiMiniFunnel size={20} />
        <FaSearch size={20} /> |
        <FilterItem>
          <input type="checkbox" />
          <span>Preserve log</span>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" />
          <span>Disable cache</span>
        </FilterItem>
        <FilterItem>
          <span>No throttling</span>
        </FilterItem>
        <FilterItem >
          <BiSolidDownArrow size={20} />
        </FilterItem>
        <FilterItem >
          <IoWifi size={20} />
        </FilterItem>
        <FilterItem >
          |
        </FilterItem>
        <FilterItem >
          <LuArrowUpFromLine size={20} />
        </FilterItem>
        <FilterItem >
          <HiMiniArrowDownTray size={20} />
        </FilterItem>
      </FilterBar>

      <FilterBar>
        <Input
          type="text"
          placeholder="Filter"
          value={inputValue}
          onChange={handleChange}
        />
        <FilterItem>
          <input type="checkbox" />
          <span>Invert</span>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" />
          <span>Hide data URLs</span>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" />
          <span>Hide extension URLs</span>
        </FilterItem>
      </FilterBar>

      <FilterBar>
        <FilterItem hasBorder>
          {/* <input type="checkbox" /> */}
          <span  >All</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Fetch/XHR</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Doc</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>CSS</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>JS</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Font</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Img</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Media</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Manifest</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>WS</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Wasm</span>
        </FilterItem>
        <FilterItem hasBorder>
          <span>Other</span>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" />
          <span>Blocked response cookies</span>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" />
          <span>Blocked requests</span>
        </FilterItem>
        <FilterItem>
          <input type="checkbox" />
          <span>3rd-party requests</span>
        </FilterItem>
      </FilterBar>

      <TableContainer>
        {requests.length === 0? (
          <Content>
            <div>Recording network activity...</div>
            <div>Perform a request or hit R to record the reload.</div>
            <Button>Learn more</Button>
          </Content>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Type</th>
                <th>Size</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => handleNameClick(index)}>
                    <td>{req.url}</td>
                    <td>{req.status}</td>
                    <td>{req.type}</td>
                    <td>{req.size}</td>
                    <td>{req.time}</td>
                  </tr>
                  {selectedRequest === index && (
                    <tr>
                      <td colSpan="5">
                        <DetailsContainer>
                          <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <TabItem onClick={() => setSelectedRequest(null)}>X</TabItem>
                            <TabItem onClick={() => handleTabChange('Headers')}>Headers</TabItem>
                            <TabItem onClick={() => handleTabChange('Response')}>Response</TabItem>
                            <TabItem onClick={() => handleTabChange('Payload')}>Payload</TabItem>
                          </div>
                          {selectedRequest !== null && (
                            <>
                              <TabContent visible={selectedTab === 'Response'}>
                                {req.response && req.response.body ? (
                                  <pre>{JSON.stringify(req.response.body, null, 2)}</pre>
                                ) : (
                                  <div>No response data available</div>
                                )}
                              </TabContent>
                              <TabContent visible={selectedTab === 'Headers'}>
                                {req.response && req.response.headers ? (
                                  <pre>{JSON.stringify(req.response.headers, null, 2)}</pre>
                                ) : (
                                  <div>No headers data available</div>
                                )}
                              </TabContent>
                              <TabContent visible={selectedTab === 'Payload'}>
                                {req.request && req.request.body ? (
                                  <pre>{JSON.stringify(req.request.body, null, 2)}</pre>
                                ) : (
                                  <div>No payload data available</div>
                                )}
                              </TabContent>
                            </>
                          )}
                        </DetailsContainer>

                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

export default NetworkActivity;


const Fetch = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px;
  input {
    width: 70%;
    padding: 8px;
    border-radius: 20px;
    padding-left: 20px;
    font-size: 20px;
    border: none;
  }
  button {
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    border: none;
    font-weight: bold;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #1E2328;
  color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #283C41;
  border-bottom: 1px solid #3f4146;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 10px;
  height: 30px;
`;

const TabItem = styled.div`
  margin-right: 10px;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #3f4146;
  }
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #3f4146;
  gap: 20px;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  gap: 5px;
  &:hover {
    background-color: #3f4146;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 8px;
  border: 1px solid #3f4146;
  border-radius: 4px;
  background-color: #1e2127;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  padding: 20px;
  font-size: 16px;
  text-align: center;
  gap: 5px;
`;

const Button = styled.button`
  background-color: #3f4146;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #5f6368;
  }
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 10px;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid gray;
  border-collapse: collapse;
  th, td {
    border: 1px solid gray;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #283C41;
    color: #fff;
  }
  td {
    background-color: #2c2f33;
    color: #fff;
  }
`;

const DetailsContainer = styled.div`
  background-color: #283C41;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const TabContent = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  word-break: break-all;
`;