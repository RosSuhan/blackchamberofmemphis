// Common React Event Handler Types
// Import this file anywhere you need cleaner props typing.

import React from "react"

// 🔹 Form & Input
export type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextareaChangeHandler = React.ChangeEventHandler<HTMLTextAreaElement>
export type SelectChangeHandler = React.ChangeEventHandler<HTMLSelectElement>
export type FileInputChangeHandler = React.ChangeEventHandler<HTMLInputElement>


// 🔹 Form Submission
export type FormSubmitHandler = React.FormEventHandler<HTMLFormElement>

// 🔹 Mouse Events
export type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>
export type DivClickHandler = React.MouseEventHandler<HTMLDivElement>
export type AnchorClickHandler = React.MouseEventHandler<HTMLAnchorElement>

// 🔹 Keyboard Events
export type InputKeyHandler = React.KeyboardEventHandler<HTMLInputElement>
export type TextareaKeyHandler = React.KeyboardEventHandler<HTMLTextAreaElement>

// 🔹 Focus & Blur
export type InputFocusHandler = React.FocusEventHandler<HTMLInputElement>
export type InputBlurHandler = React.FocusEventHandler<HTMLInputElement>

// 🔹 Drag & Drop
export type DivDragHandler = React.DragEventHandler<HTMLDivElement>
export type ImgDragHandler = React.DragEventHandler<HTMLImageElement>
