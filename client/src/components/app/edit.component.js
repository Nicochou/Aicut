import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { FiEdit, FiTrash2, FiSettings } from "react-icons/fi";
import editService from "../../services/app/edit.service";

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      clips: { clip: "" },
    };
  }

  componentDidMount() {
    let response = editService.getEditClipByUserId();
    if (!response) this.setState({ redirect: "/home" });
    response
      .then((clipUser) => {
        console.log(clipUser);
        this.setState({
          currentUser: clipUser.data.clips[0],
          userReady: true,
          clips: clipUser.data.clips[0].clips,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    const currentUser = this.state.currentUser;
    const clipsEdit = this.state.clips;
    const clips = Array.from(clipsEdit);
    console.log(clips);
    return (
      <div className="container">
        <header className="jumbotron">
        <div class="col-lg-6">
            <h4>Edit</h4>
            <p>Add advanced interaction controls to your HTML tables</p>
        </div>
        </header>
        <div class="row mb-3">
                    <div class="col-lg-12 text-right">
                        <div class="p-dropdown ml-3 float-right">
                            <a class="title btn btn-light"><FiSettings />Options</a>
                            <div class="p-dropdown-content">
                                <ul>
                                    <li><a href="#"><FiEdit />Update Records</a></li>
                                    <li><a href="#"><FiEdit />Edit</a></li>
                                    <li><a href="#"><FiTrash2 />Delete</a></li>
                                </ul>
                            </div>
                        </div>
                        <div id="export_buttons" class="mt-2"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <table id="datatable" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Date</th>
                                    <th>Salary</th>
                                    <th>Status</th>
                                    <th class="noExport">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* 
                            <tr>
                              <th scope="row">{clips.status}</th>
                              <td>{clips.id_twitch.substring(0,10)}...{clips.id_twitch.substring(clips.id_twitch.length - 10)}</td>
                              <td>{clips.createdAt}</td>
                              <td><a target="_blank" href={clips.url}>Edit</a></td>
                          </tr>                            
                            */}
                            {clips.map((clips) => (
                                <tr>
                                  <td>status</td>
                                  <td>totototo</td>
                                  <td>toto</td>
                                  <td>status</td>
                                  <td>totototo</td>
                                  <td>toto</td>
                                  <td><a target="_blank">Edit</a></td>
                                  <td> <a class="ml-2" href="#" data-toggle="tooltip" data-original-title="Edit"><i class="icon-edit"></i></a>
                                        <a class="ml-2" href="#" data-toggle="tooltip" data-original-title="Delete"><i class="icon-trash-2"></i></a>
                                        <a class="ml-2" href="#" data-toggle="tooltip" data-original-title="Settings"><i class="icon-settings"></i></a>
                                  </td>
                              </tr>
                            ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Date</th>
                                    <th>Salary</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
      </div>
    );
  }
}
