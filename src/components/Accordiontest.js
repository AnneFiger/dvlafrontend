function AccordionTest() {
   
    return(
<div>
  <div class="govuk-form-group">
  <h1 class="govuk-label-wrapper"><label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>
  <input class="govuk-input" id="event-name" name="event-name" type="text"/>
  </div>


<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
          Writing well for the web
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
      <p class='govuk-body'>This is the content for Writing well for the web.</p>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-2">
          Writing well for specialists
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-2" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-2">
      <p class='govuk-body'>This is the content for Writing well for specialists.</p>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-3">
          Know your audience
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-3" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-3">
      <p class='govuk-body'>This is the content for Know your audience.</p>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-4">
          How people read
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-4" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-4">
      <p class='govuk-body'>This is the content for How people read.</p>
    </div>
  </div>
  </div>
</div>
    );
}

export default AccordionTest;