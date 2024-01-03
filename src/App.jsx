import Time from "./Time.jsx"
const App = () => {
  return (
    <div>
      <h1>Time-Line</h1>
      <br />
      <Time year ={2003} event ="I was born"/>
      <Time year ={2007} event ="In 2007, I had fallen and a stone had enter my chin, due to which I had to be beaten a lot by my mother."/>
      <Time year ={2011} event ="In 2011, I fell off my bicycle and have never ridden a bicycle since."/>
      <Time year ={2014} event ="My aunt died in 2014.I cried a lot at that time"/>
      <Time year ={2018} event ="In 2018, I went to the Games for the first time and at that time I was very proud."/>
      <Time year ={2020} event ="In 2020, when I went to Dharamshala for the Games and ran on the synthetic track there.  That was too barefoot and because of that I got blisters on my feet."/>
    </div>
  )
}

export default App;
