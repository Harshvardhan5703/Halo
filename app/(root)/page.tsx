import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RightSidebar from '@/components/ui/RightSidebar'
import { log } from 'console'
import { getLoggedInUser } from '@/lib/actions/user.actions'
const Home = async () => {

  const loggedIn = await getLoggedInUser()
  return (

    <section className ="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user= {loggedIn?.name || "Guest"}
          subtext="Streamline your financial activities and manage all your bank accounts and transactions."
          />

          <TotalBalanceBox
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={121111111115.35}
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
