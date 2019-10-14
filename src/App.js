import React, { Component ,Fragment} from 'react'
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias'

export class App extends Component {

  state = {
    noticias : []
  }

   componentDidMount(){
     this.consultarNoticias();

  }

  consultarNoticias = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=bc828664f9db4947befd6239d45e89b2`;
    
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({
          noticias : noticias.articles
    });
      console.log(this.state.noticias)
  }

  render() {
    return (
      <Fragment>
            <Header titulo="Noticias React API"/>
            <div className="container white contenedor-noticias">
                    <ListaNoticias
                        noticias={this.state.noticias}
                    />
            </div>
      </Fragment>
      
    )
  }
}

export default App
