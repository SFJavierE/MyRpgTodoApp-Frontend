import './App.css'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import ThemesBanner from './components/themes/banner/banner.theme'
import NewQuestButton from './components/tasks/button/newQuest/newQuest.button.task'
import ImgProfile from './components/profile/img/img.profile'
import InformationProfile from './components/profile/information/information.profile'
import StadisticsProfile from './components/profile/stadistics/stadistics.profile'
import BarProgressProfile from './components/profile/progress/bar/bar.progress.profile'

function App() {  
  return (
    <main className="theme-pink" id="app-body">
      <ThemesBanner />
      <div className="container">
        <div className="app-card">
          <div id="left-panel" className="w-full md:w-1/2 p-6 md:p-10 bg-panel-light rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex flex-col">
            <div className='flex justify-between mb-8'>
              <h2 className="text-4xl font-extrabold text-gray-800 text-center md:text-left">Mis Quests</h2>
              <NewQuestButton />
            </div>
            <TaskList />
          </div>
          <div id="right-panel" className="w-full md:w-1/2 p-6 md:p-10 bg-panel-dark rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none flex flex-col items-center text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Tu Héroe de Quest</h2>
            <div className='flex gap-6'>
              <ImgProfile />
              <InformationProfile />
            </div>
            <StadisticsProfile />
            <BarProgressProfile />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
