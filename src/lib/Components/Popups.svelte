<div class="popup">
  <slot name="text">Click me!</slot>
  <span class="popuptext text-black dark:text-white"
    ><slot name="ptext">Popup text...</slot>
  </span>
</div>

<style>
  .popup {
    position: relative;
    display: inline-block;
  }

  .popup .popuptext {
    font-size: large;
    visibility: hidden;
    min-width: 160px;
    max-width: fit-content;
    background-color: #a3a3a3c5;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 50;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
  }

  /* Popup arrow */
  .popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #a3a3a3c5 transparent transparent transparent;
  }

  .popup:hover .popuptext {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
