import React from 'react';
import Form from '../../components/Form'
import { FormattedMessage } from 'react-intl';

// Documentation.jsx
const Contact = () => {

    return (
<div>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">   
      <FormattedMessage id="contact.title" />
      </h1>
      <h2 class="subtitle">
      <FormattedMessage id="contact.subtitle" />
      </h2>
    </div>
  </div>
</section>

<Form />

</div>

    )
      

} 
export default Contact