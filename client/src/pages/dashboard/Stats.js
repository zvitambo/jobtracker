/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { useAppContext } from "../../context/appContext";
import { StatsContainer, ChartsContainer, Loading } from "../../components";

const Stats = () => {

  const {showStats, isLoading, monthlyApplications} = useAppContext();
  useEffect(()=>{
    showStats()
  }, [])

  if (isLoading) return <Loading center/>
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats