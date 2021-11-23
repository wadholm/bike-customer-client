import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Table } from "reactstrap";
import { AuthContext } from "../../context/authcontext";

const travels = [{}];

const Travels = (props) => {
  return (
    <>
      <h3 className="mt-3 mb-3">Resehistorik</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {travels.map((travel) => (
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Travels;
