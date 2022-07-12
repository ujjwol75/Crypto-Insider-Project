import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Bitcoin from "./Bitcoin";
import style from "./wrap.module.css";
const Wrap = () => {
  const [headerData, setHeaderData] = useState();
  const [nuCoinData, setNuCoinData] = useState();

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,SOL,XRP,DOGE&tsyms=USD`;

  const getHeaderData = async () => {
    await axios.get(url)
      .then((response) => {
        const data = response.data;
        setHeaderData(data)
      })
  }

  useEffect(() => {
    getHeaderData();
  }, []);

  //For Nu-coin
  const nuCoinUrl = `https://insidecrypto.news/api/nu-coin/`;

  const getNuCoinData = async () => {
    await axios.get(nuCoinUrl)
      .then((response) => {
        const data = response.data;
        setNuCoinData(data)
      })
  }

  useEffect(() => {
    getNuCoinData();
  }, []);


  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div className={style.wrap}>
        <Row>
          <Col sm='4' md='3' lg='2' xl="2">
            <Bitcoin
              title={"BTC"}
              price={headerData?.RAW?.BTC?.USD?.PRICE}
              changeDay={parseFloat(headerData?.RAW?.BTC?.USD?.CHANGEDAY).toFixed(2)}
            />
          </Col>
          <Col sm='4' md='3' lg='2' xl="2" className={style.bitcoincol}>
            <Bitcoin
              title={"ETH"}
              price={headerData?.RAW?.ETH?.USD?.PRICE}
              changeDay={parseFloat(headerData?.RAW?.ETH?.USD?.CHANGEDAY).toFixed(2)}


            />
          </Col>
          <Col sm='4' md='3' lg='2' xl="2" className={style.bitcoincol}>

            <Bitcoin
              title={"BNB"}
              price={headerData?.RAW?.BNB?.USD?.PRICE}
              changeDay={parseFloat(headerData?.RAW?.BNB?.USD?.CHANGEDAY).toFixed(2)}


            />



          </Col>
          <Col sm='4' md='3' lg='1' xl="2" className={style.bitcoincol}>
            <Bitcoin
              title={"SOL"}
              price={headerData?.RAW?.SOL?.USD?.PRICE}
              changeDay={parseFloat(headerData?.RAW?.BNB?.USD?.CHANGEDAY).toFixed(2)}

            />
          </Col>
          <Col sm='4' md='3' lg='1' xl="2" className={style.bitcoincol}>
            <Bitcoin
              title={"XRP"}
              price={headerData?.RAW?.XRP?.USD?.PRICE}
              changeDay={parseFloat(headerData?.RAW?.XRP?.USD?.CHANGEDAY).toFixed(2)}

            />
          </Col>
          <Col sm='4' md='3' lg='2' xl="2" className={style.bitcoincol}>
            <Bitcoin
              title={"DOGE"}
              price={headerData?.RAW?.DOGE?.USD?.PRICE}
              changeDay={parseFloat(headerData?.RAW?.DOGE?.USD?.CHANGEDAY).toFixed(2)}

            />
          </Col>
        </Row>
        <Col sm='4' md='3' lg='2' xl="2" className={style.bitcoincol} style={{ textAlign: 'center', marginLeft: "8px" }}>
          {nuCoinData?.results?.map((item, key) => (
            <div key={key}>
              <Bitcoin
                title={item?.name}
                price={item?.price_rate}
                changeDay={parseFloat(item?.price_change).toFixed(2)}
              />
            </div>
          ))}
        </Col>
      </div>
    </div>
  );
};

export default Wrap;
