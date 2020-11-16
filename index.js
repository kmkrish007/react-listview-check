import { render } from "react-dom";
import "./index.css";
/**
 * ListView CheckList Sample
 */
import * as React from "react";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";
import { SampleBase } from "./sample-base";

import { flatList, groupData } from "./listData";
export class Checklist extends SampleBase {
  constructor() {
    super(...arguments);
    //Map the appropriate columns to fields property
    this.fields = { groupBy: "category" };
  }

  onSelect(args) {
    if (args.isChecked) {
      // checked event
      console.log("checked");
    } else {
      // unchecked event
      console.log("un checked");
    }
  }
  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div id="flat-list">
            <h4>Flat List</h4>
            <ListViewComponent
              id="sample-list-flat"
              dataSource={flatList}
              showCheckBox={true}
              select={this.onSelect.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Checklist />, document.getElementById("sample"));
