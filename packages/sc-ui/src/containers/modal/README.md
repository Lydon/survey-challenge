## A React Modal Component
A Modal component which renders the survey

### Props & Configuration Options

| Name           | Type                   |  Required |  Description                                                        | 
|----------------|------------------------|-----------|---------------------------------------------------------------------| 
| options        |  ModalOptions          |  No       |  Modal options defining the modal configuration                     | 
| sections       |  ModalSectionConfig[]  |  No       |  Modal sections defining  the survey sections                       | 

### ModalOptions

| Name                |  Type          |  Required |  Default            |  Descriptions                                       |
|---------------------|----------------|-----------|---------------------|-----------------------------------------------------|
| title               |  string        |  false    |  A survey challenge | Defines the modal title                             |
| modalPopupInterval  |  boolean       |  false    |  2000               | Defines the interval before showing the modal in ms |

### ModalSectionConfig

| Name               |  Type          |  Required |  Descriptions  |
|--------------------|----------------|-----------|------------|
| name               |  string        |  true     | Defines the section title                            |
| order              |  number        |  true     | Defines which section to load first                  |
| nextSection        |  ModalSection  |  false    | Defines which section to load when clicking next     |
| previousSection    |  ModalSection  |  false    | Defines which section to load when clicking previous |
| hasSubmit          |  boolean       |  false    | Defines whether the section has a submit             |

### ModalSection
ModalSection is a string enum

```typescript
enum ModalSection {
    Identity = "Identity",
    Details = "Details",
    Favourites = "Favourites",
    Summary = "Summary"
}
```

### Consumption Examples
Standalone
```html
    <Modal options={options}/>
```
Using Redux + Redux Persist

```html
    <Provider store={SCStore}>
       <PersistGate loading={null} persistor={persistor}>
          <Modal options={options}/>
       </PersistGate>
    </Provider>
```
