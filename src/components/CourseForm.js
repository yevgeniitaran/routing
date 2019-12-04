import React from "react";
import TextInput from "./common/TextInput";

function CourseForm(props) {
    return (
        <form>
            <TextInput
                id="title"
                name="title"
                label="Title"
                onChange={props.onChange}
                value={props.course.title}
            />


            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        name="authorId"
                        onChange={props.onChange}
                        value={props.course.authorId || ""}
                        className="form-control"
                    >
                        <option value=""/>
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
            </div>

            <TextInput
                id="category"
                name="category"
                label="Category"
                onChange={props.onChange}
                value={props.course.category}
            />

            <input type="submit" value="Save" className="btn btn-primary"/>
        </form>
    );
}

export default CourseForm;
