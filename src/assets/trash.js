<div className="card-list">
          <div className="card">
            <p className="heading">Popular this month</p>
            <p>
              All of Pearl's conversations are recorded and accessible,
              providing you with valuable insights into customer interactions.
            </p>
            <p>Uiverse</p>
          </div>
          <div className="card">
            <p className="heading">Popular this month</p>
            <p>Powered By</p>
            <p>Uiverse</p>
          </div>
          <div className="card">
            <p className="heading">Popular this month</p>
            <p>Powered By</p>
            <p>Uiverse</p>
          </div>
          <div className="card">
            <p className="heading">Popular this month</p>
            <p>Powered By</p>
            <p>Uiverse</p>
          </div>
        </div>



.slick-prev,
.slick-next {
  font-size: 40px;
  color: #c71d1d;
}

.slick-prev:hover,
.slick-next:hover {
  color: #7e1212;
}


.heading {
  font-size: 18px;
  font-weight: bold;
  color: #333;
} 

.card-list {
  display: flex;
  z-index: 0;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: horizontal;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.card {
  position: relative;
  width: 190px;
  height: 254px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
} 

 .card::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: 200px;
  height: 264px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card::after {
  content: '';
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}
 


 .card p:not(.heading) {
  font-size: 14px;
}

.card p:last-child {
  color: #e81cff;
  font-weight: 600;
}

.card:hover::after {
  filter: blur(30px);
  /* transform: scale(0.9, 0.9); */
 }

.card:hover::before {
  transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
} 

