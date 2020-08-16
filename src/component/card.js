import React from 'react';
import './cardStyle.css';
import { Modal, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
 
//  Modal Code
function MyVerticallyCenteredModal(props) {
    let {dates} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Activity Periods
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{display:"flex", flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around'}}>
          <div>
          <h5>Start Time</h5>
         {
             dates.length > 0 ?
             dates.map( sel =>{
                 let dateString = sel.start_time.split(" ").slice(0, -1).join(" ");
                 let finalDate = moment(dateString).format();  
                 let set = new Date(finalDate);
                
                 return(
                     <div style={{backgroundColor:'#4b7cfd', padding:'10px', margin:'5px', borderRadius: 10}}>
                        <h4>{sel.start_time}</h4>
                        <Calendar 
                        value={set}
                       
                    />
                     </div>
                 )
             }):
             <p> Not available</p>
         }
         
         
        </div>
        <div>
         <h5>End Time</h5>
         {
             dates.length > 0 ?
             dates.map( sel =>{
                let dateString = sel.end_time.split(" ").slice(0, -1).join(" ");
                let finalDate = moment(dateString).format();  
                let set = new Date(finalDate);
                 return(
                    <div style={{backgroundColor:'#d4545d', padding:'10px', margin:'5px', borderRadius: 10 }}>
                    <h4>{sel.end_time}</h4>
                    <Calendar 
                    value={set}
                   
                />
                 </div>
                 )
             }):
             <p> Not available</p>
         }
              
         </div>
          </div>
          
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  
function Card({value}) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div >
       <div className="card" onClick={() => setModalShow(true)}>
        <img src={require("../assets/user.png")} alt="Avatar" style={{width:"100%"}} />
           <div className="detailContainer">
             <h4><b>{value.real_name}</b></h4> 
              <h5>{value.tz}</h5> 
           </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        dates={value.activity_periods}
        onHide={() => setModalShow(false)}
      />    
      
    </div>
  );
}

export default Card;
