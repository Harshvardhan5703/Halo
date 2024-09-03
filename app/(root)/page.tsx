import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'
import { log } from 'console'
const Home = () => {

  const loggedIn = {firstName: "Harsh", lastName:"Singh", email:"harsh@vip.com"}
  return (

    <section className ="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user= {loggedIn?.firstName || "Guest"}
          subtext="Streamline your financial activities and manage all your bank accounts and transactions."
          />

          <TotalBalanceBox
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={125.35}
             />
        </header>
        RECENT TRANSACTIONS
       </div>

        <RightSidebar  
         user={loggedIn}
         transactions={[]}
         banks={[{currentBalance: 123.50},{currentBalance: 123.50}]}
         />
    </section>
  )
}

export default Home
