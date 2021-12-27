import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-sm-3'>
            <div className="alert alert-primary" role="alert">
              Website React Bootstrap
            </div>
          </div>
          <div className='col-sm-4'>

          </div>
          <div className='col-sm-3'>
            <button type="button" className="btn btn-primary">
              Notifications <span className="badge badge-light">9</span>
            </button>
            <button type="button" className="btn btn-primary">
              Message <span className="badge badge-light">19</span>
            </button></div>
          <div className='col-sm-2'>
            <div className='media'>
              <img className='mr-3' width="30px" src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="kiss" />
              <div className='media-body'>
                <h5 className='mt-0'>Andreas</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-8'>
          </div>
          <div className='col-sm 4'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href="/">Library</a></li>
                <li className="breadcrumb-item active" aria-current="page">Data</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className='container'>
          <div className='card-group'>

            <div className="card" style={{ width: "18rem" }}>
              <img src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=16" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>


            <div className="card" style={{ width: "18rem" }}>
              <img src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=16" class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default App;
