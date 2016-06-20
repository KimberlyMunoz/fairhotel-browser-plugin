(function($) {

  var allHotels = 'data.json';
  var dataName = "Hyatt Regency Sacramento";
  var concurName = "Hyatt Regency Sacramento";


  /**
   * Scrapes a list of addresses of hotels from
   * Concur search results.
   * @returns {array} Array of hotel addresses
   */

  function getConcurHotels() {
    var hotelList = [];

    var $hotelRows = $('.addresscell');

    // Grab the row with address and remove the cruft

    for (var row in $hotelRows) {
      var $hotel = $hotelRows[row];
      console.log($hotel);
      $($hotel).remove('.neighborhood');
      console.log($hotel);
      hotelList += $hotel.text();
    }

    return hotelList;
  }


  /**
   * Tests whether a string matches another.
   * @param   {string}  x The control string.
   * @param   {string}  y The comparison string.
   * @returns {boolean}   True if `x` and `y` match, false otherwise.
   */

  function stringMatch( x, y ) {
    return RegExp( stringEscape( y.trim() ), 'i' ).test( x );
  }


  /**
   * Standardizes an address by standardizing abbreviations for
   * street, avenue and other things
   * @param   {string} s The address to standardize.
   * @returns {string}   The standardized address.
   */

  function standarizeAddress( address ) {
    var hotel;
    hotel.replace( /[-\\^$*+?.()|[\]{}]/g, '\\$&' );
    hotel.replace( ' Street', ' St' );
    hotel.replace( 'Avenue', 'Ave' );
    return hotel
  }


  /**
   * NOT DONE: But eventually should detect what category a hotel
   * falls into and run
   */

  function categorizeHotel() {
    for (var hotel in allHotels) {
      if allHotels[hotel]['boycott'] === true {
        console.log(hotel +' is boycotted');
      } else if allHotels[hotel]['watchlist'] === true {
        console.log(hotel +' is at risk of a labor dispute');
      } else if allHotels[hotel]['union'] === true {
        console.log(hotel +' is unionize. Please stay here.');
      } else {
        console.log(hotel +'is a hotel.');
      }
    }
  }


  /* DOM Ready */
  $(function() {

  });


  /* Window Ready */
  $(window).bind("load", function() {
  });

})(jQuery);
