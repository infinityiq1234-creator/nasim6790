import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <section>
        <div >
          <div>
            <h3>Quick links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse">Browse all</Link></li>
            </ul>
          </div>

          <div >
            <h3>Genre</h3>
            <ul>
              <li><Link to="/shonen">Shonen</Link></li>
              <li><Link to="/seinen">Seinen</Link></li>
              <li><Link to="/fantasy">Fantasy</Link></li>
              <li><Link to="/romance">Romance</Link></li>
              <li><Link to="/sci">Sci-Fi</Link></li>
              <li><Link to="/slice">Slice of Life</Link></li>
              <li><Link to="/sports">Sports</Link></li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/report">Report</Link></li>
            </ul>
          </div>

          <div>
            <div>
              <div>Anime</div>
              <div>-Go</div>
            </div>
            <div>
              <p >
                Anime-Go is your premier platform for streaming high-quality anime shows and movies. 
                Explore extensive libraries across multiple genres completely for free.
              </p>
            </div>
            <div>
              <h4>Stay Connected</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
