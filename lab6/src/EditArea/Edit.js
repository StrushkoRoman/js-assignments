import React, {Component} from 'react';
import { FormControl, Checkbox, FormGroup } from 'react-bootstrap';
import './Edit.css';

class Edit extends Component {
    
      constructor(props, context) {
        super(props, context);
    
        this.state = {
          editable: true,
        };
      }
    
      setEditable(e) {
        this.setState({ editable: e.target.checked });
      }
    
      render() {
        const id = this.props.id;
        const text = this.props.text;
    
        const editable = this.state.editable;
    
        return (
            <div className="Edit">
    
              <Checkbox className="text-right"
                        checked={editable}
                        onChange={this.setEditable.bind(this)}>
                <span className="Edit-edit-label">Edit</span>
              </Checkbox>
    
              <FormGroup controlId={id}>
                <FormControl className="Edit-textarea"
                             componentClass="textarea"
                             readOnly={!editable}
                             defaultValue={text}
                             rows={20}/>
              </FormGroup>
    
            </div>
        );
      }
    }
    
    export default Edit;