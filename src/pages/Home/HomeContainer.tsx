import React, {useEffect, useState} from 'react';
import HomePresenter from './HomePresenter';
import { dummyApi } from 'service/api'

const loggedInUserName: string = 'zmon';

function HomeContainer() {
  const [dummy, setDummy] = useState([])
  useEffect(()=>{
    async function fetchData() {
      const { data : { data }} = await dummyApi.list()
      console.log(data)
      setDummy(data);
    }
    fetchData()
  }, [])
  return <HomePresenter name={loggedInUserName} items={dummy} />
}

export default HomeContainer;
