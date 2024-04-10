import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
import {map, Observable} from "rxjs";
import {Event} from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {}
  public events: Event[] = [];
  url = environment.TICKETMASTER_URL;
  key = environment.TICKETMASTER_API_KEY;

  getJSON(): Observable<any> {
    return this.http.get(environment.TICKETMASTER_URL + '?apikey=' + environment.TICKETMASTER_API_KEY);
  }

  getLiveResults(input: string): Observable<any> {
    return this.http.get(environment.TICKETMASTER_URL + '?apikey=' + environment.TICKETMASTER_API_KEY + '&keyword=' + input);
  }

  mockEvent: {} = {
      "_embedded": {
        "events": [
          {
            "name": "Sacramento Kings vs. Phoenix Suns",
            "type": "event",
            "id": "G5vYZ9YBk7oUU",
            "test": false,
            "url": "https://www.ticketmaster.com/sacramento-kings-vs-phoenix-suns-sacramento-california-04-12-2024/event/1C005F0E86111DB6",
            "locale": "en-us",
            "images": [
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_SOURCE",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-08-18T19:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-13T04:00:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-08-17T19:15:00Z",
                  "endDateTime": "2023-08-18T19:00:00Z",
                  "name": "Presale"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-04-12",
                "localTime": "19:30:00",
                "dateTime": "2024-04-13T02:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/Los_Angeles",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAde",
                  "name": "Basketball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vFJA",
                  "name": "NBA"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7l1",
                  "name": "Group"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vA7d",
                  "name": "Team"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "695",
              "name": "NBA REGULAR SEASON",
              "description": "NBA REGULAR SEASON / NTL / USA"
            },
            "promoters": [
              {
                "id": "695",
                "name": "NBA REGULAR SEASON",
                "description": "NBA REGULAR SEASON / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 40.0,
                "max": 545.0
              }
            ],
            "products": [
              {
                "name": "PARKWHIZ GOLDEN 1 CENTER",
                "id": "G5vYZ9YWDN-9o",
                "url": "https://www.ticketmaster.com/parkwhiz-golden-1-center-sacramento-california-04-12-2024/event/1C005F0F7B8E15D1",
                "type": "Upsell",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              },
              {
                "name": "PARKWHIZ GOLDEN 1 CENTER",
                "id": "G5vYZ9YXNbSgR",
                "url": "https://www.ticketmaster.com/parkwhiz-golden-1-center-sacramento-california-04-12-2024/event/1C005F0FA3633D6F",
                "type": "Upsell",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/1C005F0E86111DB6/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/G5vYZ9YBk7oUU?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Golden 1 Center",
                  "type": "venue",
                  "id": "KovZpZAEF76A",
                  "test": false,
                  "url": "https://www.ticketmaster.com/golden-1-center-tickets-sacramento/venue/229976",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/23091v.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "postalCode": "95814",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Sacramento"
                  },
                  "state": {
                    "name": "California",
                    "stateCode": "CA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "500 David J Stern Walk"
                  },
                  "location": {
                    "longitude": "-121.500231",
                    "latitude": "38.580372"
                  },
                  "markets": [
                    {
                      "name": "N. California/N. Nevada",
                      "id": "41"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 250
                    },
                    {
                      "id": 273
                    },
                    {
                      "id": 282
                    },
                    {
                      "id": 341
                    },
                    {
                      "id": 368
                    },
                    {
                      "id": 374
                    },
                    {
                      "id": 382
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "(916) 701-5401",
                    "openHoursDetail": "Monday thru Friday 10am to 5pm Saturday & Sunday Closed Saturday and Sunday Event Day Hours 12pm to Event Time",
                    "acceptedPaymentDetail": "The Box Office is now cashless. ONLY accept Mastercard, Visa, American Express, Discover, Apple Pay and Samsung Pay",
                    "willCallDetail": "Will Call tickets may be picked-up at the Golden 1 Center box office if a valid government issued photo I.D. that matches the name on the order, the credit card used to make the purchase, and the confirmation number given at the time of purchase are provided. VIP PACKAGES are subject to the package providers rules for pick up. Once the Will Call window closes, unclaimed tickets will be available through the end of the show at the Guest Services Booth at Section 109, please enter at the Media entrance near the box office. For the box office to release tickets not in your name you need to submit a written letter of authorization along with a copy of the driver’s license of the party whose name is on the account. Tickets are not accepted for Will Call from patrons wishing to leave tickets for others."
                  },
                  "parkingDetail": "Parking available in downtown parking lots and surface street parking. Please visit https://reserve.sacpark.org/ for additional information.",
                  "accessibleSeatingDetail": "Accessible seating is available online through Ticketmaster.com, by calling Ticketmaster phone agents or coming to the Golden 1 Center Box Office. Interpreters are available by request and are dependent upon availability. Please e-mail ADAservices@kings.com for assistance with any ADA related questions. Interpreters need to be reserved a minimum of 10 days in advance of the show. Service dogs are allowed at the Golden 1 Center.",
                  "generalInfo": {
                    "generalRule": "No Food or Beverages (including waters) No Video Cameras. Nonprofessional cameras are allowed for some events, but guests should call Golden 1 Center to verify. Golden 1 Center and DOCO are smoke free areas.",
                    "childRule": "Children two (2) years and older MUST have a ticket. Please check specific shows for age restrictions."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 48,
                    "_total": 48,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpZAEF76A?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "Sacramento Kings",
                  "type": "attraction",
                  "id": "K8vZ9171o50",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sacramento-kings-tickets/artist/806010",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/SacramentoKings"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sacramento_Kings"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sacramentokings/"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/sacramentokings/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/kings/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketmaster": 4,
                    "_total": 4,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171o50?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Phoenix Suns",
                  "type": "attraction",
                  "id": "K8vZ9171oZf",
                  "test": false,
                  "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/Suns"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/suns/"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/suns/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/suns/"
                      }
                    ]
                  },
                  "aliases": [
                    "phoenix",
                    "suns",
                    "phoenix suns exchange",
                    "phoenix suns team exchange",
                    "phoenix suns season ticket holders",
                    "phoenix suns season tix holders",
                    "phoenix suns ticket exchange",
                    "suns exchange",
                    "suns season ticket holders",
                    "suns season tix holders",
                    "suns team exchange",
                    "suns ticket exchange"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 2,
                    "ticketmaster": 2,
                    "_total": 4,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Minnesota Timberwolves vs. Phoenix Suns",
            "type": "event",
            "id": "Z7r9jZ1AdJ9AK",
            "test": false,
            "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdJ9AK",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": true
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "1900-01-01T18:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-14T19:30:00Z"
              }
            },
            "dates": {
              "start": {
                "localDate": "2024-04-14",
                "localTime": "14:30:00",
                "dateTime": "2024-04-14T19:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAde",
                  "name": "Basketball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vFJA",
                  "name": "NBA"
                },
                "family": false
              }
            ],
            "outlets": [
              {
                "url": "https://www.ticketmaster.com/minnesota-timberwolves-vs-phoenix-suns-minneapolis-minnesota-04-14-2024/event/Zu0FM1R0e5tf154",
                "type": "tmMarketPlace"
              }
            ],
            "seatmap": {
              "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/1663-553-3-0-TargetCenterMinnesotaTimberwolves75244.png"
            },
            "ticketing": {
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/Z7r9jZ1AdJ9AK?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171o10?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/ZFr9jZe667?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Target Center",
                  "type": "venue",
                  "id": "ZFr9jZe667",
                  "test": false,
                  "locale": "en-us",
                  "postalCode": "55403",
                  "timezone": "America/Chicago",
                  "city": {
                    "name": "Minneapolis"
                  },
                  "state": {
                    "name": "Minnesota",
                    "stateCode": "MN"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "600 First Ave. North"
                  },
                  "location": {
                    "longitude": "-93.286102",
                    "latitude": "44.970299"
                  },
                  "dmas": [
                    {
                      "id": 336
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 53,
                    "_total": 53,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/ZFr9jZe667?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "Minnesota Timberwolves",
                  "type": "attraction",
                  "id": "K8vZ9171o10",
                  "test": false,
                  "url": "https://www.ticketmaster.com/minnesota-timberwolves-tickets/artist/805971",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/timberwolves"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Minnesota_Timberwolves"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/MNTimberwolves"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/timberwolves"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/timberwolves/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": true
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c70/98044e71-9085-471b-9f21-78525c745c70_1340061_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 21,
                    "ticketmaster": 1,
                    "_total": 22,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171o10?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Phoenix Suns",
                  "type": "attraction",
                  "id": "K8vZ9171oZf",
                  "test": false,
                  "url": "https://www.ticketmaster.com/phoenix-suns-tickets/artist/806004",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/Suns"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Phoenix_Suns"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/suns/"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/suns/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/suns/"
                      }
                    ]
                  },
                  "aliases": [
                    "phoenix",
                    "suns",
                    "phoenix suns exchange",
                    "phoenix suns team exchange",
                    "phoenix suns season ticket holders",
                    "phoenix suns season tix holders",
                    "phoenix suns ticket exchange",
                    "suns exchange",
                    "suns season ticket holders",
                    "suns season tix holders",
                    "suns team exchange",
                    "suns ticket exchange"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 2,
                    "ticketmaster": 2,
                    "_total": 4,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oZf?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Los Angeles Dodgers vs. San Diego Padres",
            "type": "event",
            "id": "Z7r9jZ1AdP978",
            "test": false,
            "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdP978",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_SOURCE",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "1900-01-01T06:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-14T01:10:00Z"
              }
            },
            "dates": {
              "start": {
                "localDate": "2024-04-13",
                "localTime": "18:10:00",
                "dateTime": "2024-04-14T01:10:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAdv",
                  "name": "Baseball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vF1n",
                  "name": "MLB"
                },
                "family": false
              }
            ],
            "outlets": [
              {
                "url": "https://www.ticketmaster.com/los-angeles-dodgers-vs-san-diego-los-angeles-california-04-13-2024/event/Zu0FM1R0e5tQ1Fa",
                "type": "tmMarketPlace"
              }
            ],
            "seatmap": {
              "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png"
            },
            "ticketing": {
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/Z7r9jZ1AdP978?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91718BV?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Dodger Stadium",
                  "type": "venue",
                  "id": "Z6r9jZAFke",
                  "test": false,
                  "locale": "en-us",
                  "postalCode": "90012",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Los Angeles"
                  },
                  "state": {
                    "name": "California",
                    "stateCode": "CA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1000 Elysian Park Ave."
                  },
                  "location": {
                    "longitude": "-118.2388",
                    "latitude": "34.0658"
                  },
                  "dmas": [
                    {
                      "id": 324
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 73,
                    "ticketmaster": 1,
                    "_total": 74,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "Los Angeles Dodgers",
                  "type": "attraction",
                  "id": "K8vZ9171oA0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/Dodgers"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/Dodgers/"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/dodgers/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.mlb.com/dodgers"
                      }
                    ]
                  },
                  "aliases": [
                    "dodgers baseball",
                    "los angeles dodgers",
                    "la dodgers"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAdv",
                        "name": "Baseball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vF1n",
                        "name": "MLB"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 117,
                    "ticketmaster": 38,
                    "_total": 155,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "San Diego Padres",
                  "type": "attraction",
                  "id": "K8vZ91718BV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/san-diego-padres-tickets/artist/806014",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/padres"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/San_Diego_Padres"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/Padres"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/padres"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.mlb.com/padres"
                      }
                    ]
                  },
                  "aliases": [
                    "padres baseball",
                    "san diego padres"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAdv",
                        "name": "Baseball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vF1n",
                        "name": "MLB"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 58,
                    "ticketmaster": 91,
                    "_total": 149,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91718BV?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG17Z9MBX0JyU",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-foxborough-massachusetts-08-21-2024/event/01005F7EBE926E76",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T15:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-08-22T00:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-08-21T22:30:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "VIP Package Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-09T14:45:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Live Nation/Ticketmaster/Venue/Radio"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-08-15T02:00:00Z",
                  "name": "P!NK VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-07-25T02:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-08-21",
                "localTime": "18:30:00",
                "dateTime": "2024-08-21T22:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/New_York",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              },
              {
                "id": "494",
                "name": "PROMOTED BY VENUE",
                "description": "PROMOTED BY VENUE / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 59.11,
                "max": 340.0
              }
            ],
            "products": [
              {
                "name": "PARKWHIZ GILLETTE STADIUM",
                "id": "vvG17Z9MzKCQqu",
                "url": "https://www.ticketmaster.com/parkwhiz-gillette-stadium-foxborough-massachusetts-08-21-2024/event/01005F7E1339A74D",
                "type": "Upsell",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/01005F7EBE926E76/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is a 8 Ticket Limit on this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG17Z9MBX0JyU?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpZA6kvlA?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Gillette Stadium",
                  "type": "venue",
                  "id": "KovZpZA6kvlA",
                  "test": false,
                  "url": "https://www.ticketmaster.com/gillette-stadium-tickets-foxborough/venue/8759",
                  "locale": "en-us",
                  "aliases": [
                    "gilette",
                    "gillette",
                    "gilette stadium",
                    "gillete stadium"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/23010v.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "postalCode": "02035",
                  "timezone": "America/New_York",
                  "city": {
                    "name": "Foxborough"
                  },
                  "state": {
                    "name": "Massachusetts",
                    "stateCode": "MA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1 Patriot Place"
                  },
                  "location": {
                    "longitude": "-71.264321",
                    "latitude": "42.090918"
                  },
                  "markets": [
                    {
                      "name": "Boston",
                      "id": "11"
                    },
                    {
                      "name": "New England",
                      "id": "33"
                    },
                    {
                      "name": "Connecticut",
                      "id": "124"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 225
                    },
                    {
                      "id": 235
                    },
                    {
                      "id": 238
                    },
                    {
                      "id": 296
                    },
                    {
                      "id": 361
                    },
                    {
                      "id": 363
                    },
                    {
                      "id": 364
                    },
                    {
                      "id": 392
                    }
                  ],
                  "social": {
                    "twitter": {
                      "handle": "@gillettestadium"
                    }
                  },
                  "boxOfficeInfo": {
                    "openHoursDetail": "The Gillette Stadium Ticket Office is located in the Enel Plaza, outside of the Ticketmaster gate at the north end of the stadium. The Gillette Stadium Ticket Office is open on event days only and will open with parking lots.",
                    "acceptedPaymentDetail": "Visa only for New England Patriots. Visa, Mastercard, Amex, Cash-For all other events",
                    "willCallDetail": "Will call is located at the ticket office. Customers must present photo I.D., the actual credit card used to purchase tickets and the confirmation number. NOTE: If picking up your tickets at Will Call, we strongly recommend arriving at the Ticket Office with a photo I.D. one hour prior to kickoff to claim your seats and avoid any prolonged wait times."
                  },
                  "parkingDetail": "Opening and price varies per event. Please check www.gillettestadium.com for more information.",
                  "accessibleSeatingDetail": "Accessible Seating available through Ticketmaster and the box office.",
                  "generalInfo": {
                    "generalRule": "No umbrellas, coolers, cans, bottles or alcohol allowed in stadium. Tailgating, picnicing, BBQ's allowed in specific areas of parking lots. No open fires. Gillette has a new Clear Bag Policy! Bags of any kind will not be permitted except for gallon size clear freezer or authorized clear bags measuring 12\"x 12\" x 6\" and women's clutches not to exceed 7\" x 4\" x 2\" (approximately the size of a hand). For more information visit: WWW.GILLETTESTADIUM.COM/BAGPOLICY"
                  },
                  "upcomingEvents": {
                    "ticketmaster": 27,
                    "_total": 27,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpZA6kvlA?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Los Angeles Dodgers vs. San Diego Padres",
            "type": "event",
            "id": "Z7r9jZ1AdP976",
            "test": false,
            "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdP976",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_SOURCE",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "1900-01-01T06:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-13T02:10:00Z"
              }
            },
            "dates": {
              "start": {
                "localDate": "2024-04-12",
                "localTime": "19:10:00",
                "dateTime": "2024-04-13T02:10:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAdv",
                  "name": "Baseball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vF1n",
                  "name": "MLB"
                },
                "family": false
              }
            ],
            "outlets": [
              {
                "url": "https://www.ticketmaster.com/los-angeles-dodgers-vs-san-diego-los-angeles-california-04-12-2024/event/Zu0FM1R0e5tQ1F6",
                "type": "tmMarketPlace"
              }
            ],
            "seatmap": {
              "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png"
            },
            "ticketing": {
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/Z7r9jZ1AdP976?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91718BV?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Dodger Stadium",
                  "type": "venue",
                  "id": "Z6r9jZAFke",
                  "test": false,
                  "locale": "en-us",
                  "postalCode": "90012",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Los Angeles"
                  },
                  "state": {
                    "name": "California",
                    "stateCode": "CA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1000 Elysian Park Ave."
                  },
                  "location": {
                    "longitude": "-118.2388",
                    "latitude": "34.0658"
                  },
                  "dmas": [
                    {
                      "id": 324
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 73,
                    "ticketmaster": 1,
                    "_total": 74,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "Los Angeles Dodgers",
                  "type": "attraction",
                  "id": "K8vZ9171oA0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/Dodgers"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/Dodgers/"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/dodgers/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.mlb.com/dodgers"
                      }
                    ]
                  },
                  "aliases": [
                    "dodgers baseball",
                    "los angeles dodgers",
                    "la dodgers"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAdv",
                        "name": "Baseball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vF1n",
                        "name": "MLB"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 117,
                    "ticketmaster": 38,
                    "_total": 155,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "San Diego Padres",
                  "type": "attraction",
                  "id": "K8vZ91718BV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/san-diego-padres-tickets/artist/806014",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/padres"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/San_Diego_Padres"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/Padres"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/padres"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.mlb.com/padres"
                      }
                    ]
                  },
                  "aliases": [
                    "padres baseball",
                    "san diego padres"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAdv",
                        "name": "Baseball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vF1n",
                        "name": "MLB"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 58,
                    "ticketmaster": 91,
                    "_total": 149,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91718BV?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG1YZ9ASfN7Jv",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-arlington-texas-11-06-2024/event/0C005C5CD48C4981",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2022-11-21T16:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-11-07T02:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2022-11-16T16:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2022-11-16T16:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "VIP Package Presale"
                },
                {
                  "startDateTime": "2022-11-17T18:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2022-11-19T16:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2022-11-19T16:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "Brandi Carlile Fan Club Presale"
                },
                {
                  "startDateTime": "2022-11-21T16:00:00Z",
                  "endDateTime": "2024-10-30T22:00:00Z",
                  "name": "VIP Package Onsale"
                },
                {
                  "startDateTime": "2022-11-16T16:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "Official Platinum Presale"
                },
                {
                  "startDateTime": "2022-11-21T16:00:00Z",
                  "endDateTime": "2024-11-07T02:30:00Z",
                  "name": "Official Platinum"
                },
                {
                  "startDateTime": "2022-11-19T16:00:00Z",
                  "endDateTime": "2022-11-21T05:00:00Z",
                  "name": "Texas Rangers Presale"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-11-06",
                "localTime": "18:30:00",
                "dateTime": "2024-11-07T00:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "initialStartDate": {
                "localDate": "2023-11-26",
                "localTime": "18:30:00",
                "dateTime": "2023-11-27T00:30:00Z"
              },
              "timezone": "America/Chicago",
              "status": {
                "code": "rescheduled"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "pleaseNote": "Previously scheduled for Nov 26 2023. Orignally scheduled for Sept 29 2023 All previously purchased tickets will be honored for the new date of Wed November 6 2024 6:30pm.",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 30.0,
                "max": 374.95
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0C005C5CD48C4981/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is a four (4) ticket limit during the presale, & an eight (8) ticket limit for the general public onsale."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "doorsTimes": {
              "localDate": "2023-09-29",
              "localTime": "17:30:00",
              "dateTime": "2023-09-29T22:30:00Z"
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1YZ9ASfN7Jv?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZ917A-X0?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Globe Life Field",
                  "type": "venue",
                  "id": "KovZ917A-X0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/globe-life-field-tickets-arlington/venue/99338",
                  "locale": "en-us",
                  "postalCode": "76011",
                  "timezone": "America/Chicago",
                  "city": {
                    "name": "Arlington"
                  },
                  "state": {
                    "name": "Texas",
                    "stateCode": "TX"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "734 Stadium Drive"
                  },
                  "location": {
                    "longitude": "-97.083796",
                    "latitude": "32.747242"
                  },
                  "markets": [
                    {
                      "name": "Dallas - Fort Worth and More",
                      "id": "5"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 212
                    },
                    {
                      "id": 218
                    },
                    {
                      "id": 261
                    },
                    {
                      "id": 326
                    },
                    {
                      "id": 348
                    },
                    {
                      "id": 386
                    },
                    {
                      "id": 405
                    },
                    {
                      "id": 415
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 78,
                    "ticketmaster": 5,
                    "_total": 83,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZ917A-X0?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG18Z9Mzzn05q",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-chicago-illinois-08-24-2024/event/04005F7E38AA42DD",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T16:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-08-25T00:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Venue Presale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Radio Presale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-07T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-11T16:00:00Z",
                  "endDateTime": "2024-07-26T03:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-07T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "P!NK VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-07T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-11T16:00:00Z",
                  "endDateTime": "2024-08-18T03:00:00Z",
                  "name": "P!NK VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-11T16:00:00Z",
                  "endDateTime": "2024-07-28T03:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-08-24",
                "localTime": "18:30:00",
                "dateTime": "2024-08-24T23:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/Chicago",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 49.95,
                "max": 349.95
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/04005F7E38AA42DD/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "info": "Accessible seating, mobility, sight & hearing impaired seating  is available in all price levels.  ADA seating locations may vary depending on the type of show and configuration of each event.\r\nIn general, ADA accessible seating is located at the back of seating sections on 100, 200 and 300 Levels of the bowl.  For concerts, a raised ADA platform, or a section with unobstructed views of the stage are provided for accessible seating on the floor.\r\nTicketmaster sales of accessible seating is limited to MAXIMUM of (4) tickets.  All accessible seating is available for purchase online at Ticketmaster.com or by calling Ticketmaster at 1-800-653-8000.\r\nIf there is a hearing-impaired request or a larger request for accessible seating, please direct the order to the Soldier Field Box Office at (312) 235-7000 or boxoffice@soldierfield.net.                   \r\nHandicapped accessible elevators are located in the North Parking Garage, the United Club, the South Courtyard, and West Mezzanine.",
              "ticketLimit": 20,
              "url": "http://www.soldierfield.net/content/facility-guide",
              "urlText": "For additional venue information regarding ADA seating click here"
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "doorsTimes": {
              "localDate": "2024-08-24",
              "localTime": "16:30:00",
              "dateTime": "2024-08-24T21:30:00Z"
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG18Z9Mzzn05q?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpZAF6tIA?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Soldier Field",
                  "type": "venue",
                  "id": "KovZpZAF6tIA",
                  "test": false,
                  "url": "https://www.ticketmaster.com/soldier-field-tickets-chicago/venue/32827",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/7047v.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "60605",
                  "timezone": "America/Chicago",
                  "city": {
                    "name": "Chicago"
                  },
                  "state": {
                    "name": "Illinois",
                    "stateCode": "IL"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1410 S. Museum Campus Drive"
                  },
                  "location": {
                    "longitude": "-87.61682143",
                    "latitude": "41.86205404"
                  },
                  "markets": [
                    {
                      "name": "Chicagoland and Northern Il",
                      "id": "3"
                    },
                    {
                      "name": "Central Illinois",
                      "id": "54"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 242
                    },
                    {
                      "id": 249
                    },
                    {
                      "id": 357
                    },
                    {
                      "id": 373
                    }
                  ],
                  "social": {
                    "twitter": {
                      "handle": "@SoldierField"
                    }
                  },
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "For non Bears events please call (312) 235-7000",
                    "openHoursDetail": "Chicago Bears ticket office is available by phone Monday-Friday 8am-5pm CST. The Soldier Field Box Office is open only on game days, their phone number is (312) 235-7000.",
                    "acceptedPaymentDetail": "The Box Office accepts cash only for Chicago Bears games. Soldier Field games accept Visa, Mastercard, American Express, Cash.",
                    "willCallDetail": "Chicago Bears events: Tickets may be picked up at the Will Call Window outside of Gate 10, 2 hours before the event. Gate 10 is located on the southeast side of Soldier Field. Customers must have the actual credit card, picture ID and the confirmation number to receive their tickets. Soldier Field events: Will Call is available on the day of the event only. Government issued photo i.d. and the credit card used for the purchase will be required to claim tickets. Typically will call opens 90 minutes to an hour before the scheduled event."
                  },
                  "parkingDetail": "Chicago Bears Parking Information: All of the spaces in the on-site parking lots near Soldier Field are pre-sold for the entire season to Bears season ticket holders. If you do not have a pre-paid coupon, here are some options for you: If you prefer to tailgate before the Bears games, you can park in the 31st Street McCormick Place Lot. It costs $16 and there are shuttle buses to bring you to the 18th Street Shuttle Turnaround, directly across from the stadium. You can also walk to the stadium from the 31st Street Lot. If you don't want to tailgate, we recommend you park in the East Monroe Street / Millennium Park garages, located at Columbus Drive and Monroe Street. It costs $13 and you can then take the free shuttle directly to the 18th Street Shuttle Turnaround. The shuttle bus takes about 10 minutes because it travels on a specially designed bus way which keeps it out of most Soldier Field traffic. There are over 40 buses continuously shuttling fans beginning five hours prior to kickoff. Lastly, we recommend taking public transportation. The Transportation Center, located northeast of the stadium (at the corner of McFetridge and Museum Campus Drive) is where the CTA, Metra shuttle, and PACE bus services will be available for fans drop-off and pick-up. The CTA's train service for the Red, Orange or Green Lines are available at the Roosevelt Road and State Street Station. For schedule and route information, please contact: RTA (312) 836-7000 or rtachicago.com CTA (888) YOUR-CTA or transitchicago.com",
                  "accessibleSeatingDetail": "Accessible Seating Information for Chicago Bears games: For Chicago Bears accessible seating please purchase the best available seating and contact the Chicago Bears at 847-615-2327 for an exchange after purchase is complete. Accessible Seating Information for Other Soldier Field events: Accessible seating is available through Ticketmaster. Do NOT contact the Chicago Bears for accessible seating information on non-Bears events at Soldier Field",
                  "generalInfo": {
                    "generalRule": "Cameras and recording devices are N O T permitted. No umbrellas, cans, or bottles can be brought into the stadium. Chicago Bears: The Smoke Free Act prohibits smoking in all public venues. In order to be compliant with the Smoke-Free Illinois Act, smoking will be prohibited at all Chicago Bears events at Soldier Field. There will be no designated smoking areas inside or outside of the stadium, and re-entry is prohibited. The smoking policy will be strictly enforced. Violaters are subject to ejection from the stadium; repeated violations can resultin the result in the forfeiting of ticket privileges. Ushers and security officers will be enforcing the new smoke-free policy. First-time violaters of the smoking policy will be asked to exchange their ticket for a \"Smoking Card\". Any patron refusing to exchange thier ticket will be ejected from the stadium. If a patron is then smoking in the stadium for a second time, he or she will be ejected.",
                    "childRule": "Our policy is that if your child can walk under the turnstiles (approximately 32 inches) then you should go to Gate 10 on the south east side of Soldier Field on gameday to receive a complimentary lap pass for that day's game for the child. The child will have to sit on a ticketed patron’s lap for the game. The entire party will then be admitted to the stadium at Gate 10. Strollers are not permitted in the stadium."
                  },
                  "upcomingEvents": {
                    "tmr": 2,
                    "ticketmaster": 44,
                    "_total": 46,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpZAF6tIA?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG1bZ9MwOsvtU",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-st-louis-missouri-08-10-2024/event/06005F7CA0C41A76",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T16:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-08-11T01:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-07T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "P!nk VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-07T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-07T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Citi Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-11T16:00:00Z",
                  "endDateTime": "2024-08-04T03:00:00Z",
                  "name": "P!nk VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-11T16:00:00Z",
                  "endDateTime": "2024-07-12T03:00:00Z",
                  "name": "Citi Cardmember Preferred Onsale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T16:00:00Z",
                  "endDateTime": "2023-12-11T04:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-11T16:00:00Z",
                  "endDateTime": "2024-07-14T03:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-08-10",
                "localTime": "18:30:00",
                "dateTime": "2024-08-10T23:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/Chicago",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 39.95,
                "max": 339.95
              }
            ],
            "products": [
              {
                "name": "PARKWHIZ THE DOME AT AMERICA'S CENTER",
                "id": "vv1FbZb6GAqPZdGu2",
                "url": "https://www.ticketmaster.com/parkwhiz-the-dome-at-americas-center-st-louis-missouri-08-10-2024/event/0600607305765BCE",
                "type": "Upsell",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/06005F7CA0C41A76/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1bZ9MwOsvtU?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpZA6AJeA?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "The Dome at America's Center",
                  "type": "venue",
                  "id": "KovZpZA6AJeA",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-dome-at-americas-center-tickets-st-louis/venue/49621",
                  "locale": "en-us",
                  "aliases": [
                    "twa dome",
                    "trans world dome"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/18309v.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "63101",
                  "timezone": "America/Chicago",
                  "city": {
                    "name": "St Louis"
                  },
                  "state": {
                    "name": "Missouri",
                    "stateCode": "MO"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "701 Convention Plaza"
                  },
                  "location": {
                    "longitude": "-90.191488",
                    "latitude": "38.630801"
                  },
                  "markets": [
                    {
                      "name": "Saint Louis and More",
                      "id": "39"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 255
                    },
                    {
                      "id": 365
                    },
                    {
                      "id": 376
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "DOME AT AMERICA'S CENTER: (314)342-5000",
                    "openHoursDetail": "DOME AT AMERICAS CENTER BOX OFFICE Usually open only on show days. This varies depending on the events that are on sale. Please call the box office for more information. On show days, the box office opens three 3 hours prior to ticketed show time until one 1 hour past the ticketed show time.",
                    "acceptedPaymentDetail": "MasterCard, Visa, American Express, Discover & Cash",
                    "willCallDetail": "Will Call is located at the main ticket office on the east side of the Dome at the Broadway Central Entrance (between entries B & C). Will call tickets can be claimed only by the person whose name appears on the ticket envelope. Customer must present actual credit card used for purchase, confirmation number and valid photo identification to receive tickets."
                  },
                  "parkingDetail": "Several covered and surface lots are available throughout the perimeter of the Dome and Convention Center.",
                  "accessibleSeatingDetail": "The Dome at America's Center is fully compliant with all ADA accessibility guidelines. Accessible seating for events may be purchased online or over the phone.",
                  "generalInfo": {
                    "generalRule": "For performance specific information, please call the Dome at America's Center at (314)342-5000. PROHIBITED ITEMS - For your safety and the continuity of the event, the following items are prohibited in the Dome at America's Center:   Large bags   Weapon   Food not dispensed by dome concessionaires**   No Glass Containers (of any kind)   Beverages**   No Alcoholic Beverages   No Chains (of any kind)   Bottles, cans, coolers, containers, thermoses   No Recording Equipment, SOUND or VIDEO   No Professional nor Semi Professional Cameras, STILL OR DIGITAL   Strollers (see Goal Post dispatch for exceptions)   Glitter or confetti   Peanuts in the shell   Projectiles (i.e. Frisbees, footballs or beach balls)   Poles or sticks of any kind   No Laser Pens or laser pointers   No Go Pro Cameras, iPads or Tablets   No Selfie Sticks   Laptop computers (exceptions may be made by some clients)   Animals or pets (not including service animals)   Artificial noisemakers of any kind (i.e. cowbells or air horns)   Illegal drugs or substances   Fireworks, candles, flares, balloons   Firearms, knives, missiles and weapons of any kind   Mace and pepper gas   Any item that could obstruct a guest’s view of the event   Any other item deemed dangerous or inappropriate by management   Any other item/s deemed to be offensive or of risk.   No posters, Banners, Signs of ANY kind are allowed. ** Exceptions may be made for those with medical requirements or special needs.",
                    "childRule": "Childrens discounts are on a show by show basis. Please call (314)342-5000 for more information."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 6,
                    "_total": 6,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpZA6AJeA?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG1FZ9MMoSUKo",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-philadelphia-pennsylvania-08-18-2024/event/02005F7DD1CF64D1",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T15:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-08-18T23:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-08T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Venue Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-07-20T02:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-08-12T02:00:00Z",
                  "name": "VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-07-22T02:00:00Z",
                  "name": "Verizon Up Select Seats"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "VIP Packages Presale"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-08-18",
                "localTime": "18:30:00",
                "dateTime": "2024-08-18T22:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/New_York",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 49.95,
                "max": 319.95
              }
            ],
            "products": [
              {
                "name": "Parking: P!NK: Summer Carnival 2024",
                "id": "vv1AeZkv-Gkde99Wb",
                "url": "https://www.ticketmaster.com/parking-pnk-summer-carnival-2024-philadelphia-pennsylvania-08-18-2024/event/02006061C25D7F58",
                "type": "Parking",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/02005F7DD1CF64D1/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1FZ9MMoSUKo?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpa2yme?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Lincoln Financial Field",
                  "type": "venue",
                  "id": "KovZpa2yme",
                  "test": false,
                  "url": "https://www.ticketmaster.com/lincoln-financial-field-tickets-philadelphia/venue/16752",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/22350v.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "postalCode": "19148",
                  "timezone": "America/New_York",
                  "city": {
                    "name": "Philadelphia"
                  },
                  "state": {
                    "name": "Pennsylvania",
                    "stateCode": "PA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "One Lincoln Financial Way"
                  },
                  "location": {
                    "longitude": "-75.167406",
                    "latitude": "39.900706"
                  },
                  "markets": [
                    {
                      "name": "Philadelphia",
                      "id": "18"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 358
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "General Info - 215.463.2500 Ticket Office - 215.463.5500 Accessible Seating - 215.463.5500",
                    "openHoursDetail": "Monday - Friday 9am - 5pm Event Day - Remote ticket booth located 11th st. side of main parking lot. Non event day:Headhouse",
                    "acceptedPaymentDetail": "MasterCard, Visa, Discover, Traveler's Checks, Cash, & American Express.",
                    "willCallDetail": "Pick up tickets one hour prior to show. Customer must present actual credit card used to place the order, the confirmation number and a photo I.D. Doors and plaza gates open 3 hours prior to event - seating gates - 2 hours prior to event. For non Eagles events - Will Call is on 11th St. facing the Wachovia Ctr. Will Call for the Lacrosse Event, May 28 - May 30, 2005 will be at the Chrysler Jeep Entrance/Main Ticket office."
                  },
                  "parkingDetail": "See map in playbook. There is a charge to park with ample surrounding lots.",
                  "accessibleSeatingDetail": "Accessible seating is available in all levels. Limited accessible seating through Ticketmaster. Please call 215.463.5500 for accessible procedures.",
                  "generalInfo": {
                    "generalRule": "Cameras allowed, smoking in designated areas only, no recording devices. see page 17 of guest playbook.",
                    "childRule": "No discounts for Eagles - varies with other events."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 11,
                    "_total": 11,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpa2yme?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "k7vGF9MQsrwdx",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-syracuse-new-york-10-06-2024/event/00005F76B17B20E2",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T15:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-10-07T01:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Venue Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-07T02:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-07T02:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-09T02:00:00Z",
                  "name": "Verizon Up Select Seats"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "VIP Package Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-30T02:00:00Z",
                  "name": "VIP Package"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-10-06",
                "localTime": "18:30:00",
                "dateTime": "2024-10-06T22:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/New_York",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 49.95,
                "max": 330.0
              }
            ],
            "products": [
              {
                "name": "Advance Sale P!NK Prepaid Parking",
                "id": "k7vGF9MUniKDZ",
                "url": "https://www.ticketmaster.com/advance-sale-pnk-prepaid-parking-syracuse-new-york-10-06-2024/event/00005F7DAAB13EC0",
                "type": "Parking",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/00005F76B17B20E2/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "info": "For additional accommodations please contact a JMA Dome representative at 1-888-366-3849 and option Four.  Monday - Friday 8:30am- 4:30pm",
              "ticketLimit": 4,
              "url": "https://cuse.com/sports/2009/2/3/GEN_0203095918",
              "urlText": "Or visit the JMA Dome Guest Services page."
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": true
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/k7vGF9MQsrwdx?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpakwYe?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "JMA Wireless Dome ",
                  "type": "venue",
                  "id": "KovZpakwYe",
                  "test": false,
                  "url": "https://www.ticketmaster.com/jma-wireless-dome-tickets-syracuse/venue/167",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/18449v.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "13244",
                  "timezone": "America/New_York",
                  "city": {
                    "name": "Syracuse"
                  },
                  "state": {
                    "name": "New York",
                    "stateCode": "NY"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "900 Irving Avenue"
                  },
                  "location": {
                    "longitude": "-76.1361305",
                    "latitude": "43.03626312"
                  },
                  "markets": [
                    {
                      "name": "Upstate New York",
                      "id": "44"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 213
                    },
                    {
                      "id": 231
                    },
                    {
                      "id": 237
                    },
                    {
                      "id": 270
                    },
                    {
                      "id": 372
                    },
                    {
                      "id": 394
                    },
                    {
                      "id": 406
                    },
                    {
                      "id": 410
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "888-366-3849",
                    "openHoursDetail": "Monday Through Friday 8:30AM-4:30PM",
                    "acceptedPaymentDetail": "Cash, Visa, Mastercard, American Express and Discover",
                    "willCallDetail": "Customers can pick-up tickets any time day of show! Customer must present the actual credit card used to place order and a photo i.d."
                  },
                  "parkingDetail": "Day of event parking at Syracuse University major events (Men’s basketball, football, concerts, etc.) is available at Manley and Skytop lots, with a shuttle service to and from the Dome included in the price. Dome West lots are available for smaller events. Call our Box Office for RV and Bus pricing, or other questions.",
                  "generalInfo": {
                    "childRule": "Children under 12 months old do not need a ticket and are expected to sit on an adult’s lap during the event."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 3,
                    "_total": 3,
                    "_filtered": 0
                  },
                  "ada": {
                    "adaPhones": " 888-DOME-TIX (366-3849), Option 4",
                    "adaCustomCopy": "For reserved seat accessible Wheelchair and Companion seats (maximum of three), please click the Filters Icon on the Buy screen for the game you are interested in, and click the Accessibility option on. Any available Accessible seating will then highlight. Note that for Women’s Basketball and Men’s Lacrosse, accessible seating is in the General Admission area, where Dome staff will direct you when you enter the game. You may also contact the Dome Box Office at 888-DOME-TIX during regular business hours (except when closed for holidays) for further assistance with your ticket purchase.",
                    "adaHours": "Monday Through Friday 8:30AM-4:30PM\n"
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpakwYe?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "k7vGF9z6xPpDI",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-east-rutherford-new-jersey-10-03-2024/event/00005F81E2956EE8",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T15:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-10-04T01:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "P!NK VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Venue/Team Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-04T02:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-27T02:00:00Z",
                  "name": "P!NK VIP Package Onsale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-06T02:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-10-03",
                "localTime": "18:30:00",
                "dateTime": "2024-10-03T22:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/New_York",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 56.0,
                "max": 326.0
              }
            ],
            "products": [
              {
                "name": "PARKWHIZ METLIFE STADIUM",
                "id": "k7vGF9z8GLkAU",
                "url": "https://www.ticketmaster.com/parkwhiz-metlife-stadium-east-rutherford-new-jersey-10-03-2024/event/00005F840C7C6176",
                "type": "Upsell",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/00005F81E2956EE8/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall (8) eight ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/k7vGF9z6xPpDI?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "MetLife Stadium",
                  "type": "venue",
                  "id": "KovZpakS7e",
                  "test": false,
                  "url": "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/22874v.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "postalCode": "07073",
                  "timezone": "America/New_York",
                  "city": {
                    "name": "East Rutherford"
                  },
                  "state": {
                    "name": "New Jersey",
                    "stateCode": "NJ"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "One MetLife Stadium Drive"
                  },
                  "location": {
                    "longitude": "-74.074493",
                    "latitude": "40.81359"
                  },
                  "markets": [
                    {
                      "name": "New York/Tri-State Area",
                      "id": "35"
                    },
                    {
                      "name": "Northern New Jersey",
                      "id": "55"
                    },
                    {
                      "name": "Connecticut",
                      "id": "124"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 296
                    },
                    {
                      "id": 345
                    },
                    {
                      "id": 422
                    }
                  ],
                  "social": {
                    "twitter": {
                      "handle": "@MetLifeStadium"
                    }
                  },
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "Box Office: 201.559.1300, tickets@metlifestadium.com - General Ticket Inquiries - ADA Ticket Inquiries Guest Services: 201.559.1515, info@metlifestadium.com",
                    "openHoursDetail": "MetLife Stadium Box Office is open Monday through Friday 11am through 5pm. The Box Office is located in the West VIP lobby. Please park in Lot G, enter through MetLife Gate and into the large glass doors labeled West VIP.",
                    "acceptedPaymentDetail": "The MetLife Stadium Box Office will accept cash, Visa, Mastercard, Discover, and American Express. Personal checks will not be accepted.",
                    "willCallDetail": "Ticketmaster Will Call may be picked up at any open ticket window. For all events, non-Ticketmaster will call orders may be picked up at the designated will call window. Will call tickets will be available beginning at least 2 hours prior to the scheduled start time for the event."
                  },
                  "parkingDetail": "General Parking Information: * MetLife Stadium Parking Availability: There are approximately 23,000 parking spaces available that are distributed among 14 lots. * There is no street parking available near the stadium. * Parking fees will vary by event. * Accessible parking is available in Lots E, F, & G. Accessible parking is available on a first come / first serve basis. You must have parking pass and state- issued person with disabilities placard or license plate to park in an accessible parking space. Violators will be subject to citation and possible revocation of season or event parking privileges. *Taxi / Black Car, Limousine, and Guest drop offs will be permitted in Lot C. * Bus and R/V Parking is available in Lot L. * All vehicles parking within the stadiums secured parking perimeter are subject to security inspection before being permitted to park. * Hours of Operation will vary per event. For NFL games, parking lots will open 5 hours prior to kickoff. All other events are subject to vary. * Parking passes are valid only for the event or game noted on the pass and for the specific lot. *Please note, all parking information may be amended based on the nature of the event, please contact the stadium at 201-559-1515 or info@metlifestadium.com with any specific questions not addressed above.",
                  "accessibleSeatingDetail": "MetLife Stadium is fully accessible including all concession stand locations, merchandise stands, ATM's and seating areas. Accessible seating for guests with special needs is available on all levels and in all price ranges. Elevators are located in the southeast (HCL Tech), southwest (Verizon), and northwest (Pepsi) corners of the stadium. Ramps are located at the north and south entrances. Seats with removable armrests are located throughout the stadium. A limited number of wheelchairs are located at each of the entrance gates to transport guests with limited mobility to their seating area. Guests may contact the MetLife Stadium at 201-559-1515 or ADAinfo@metlifestadium.com for more information or any additional needs for non-NFL events. MetLife Stadium ADA Ticket Questions call 201-559-1300. New York Giants ADA Ticket Purchases call 888-694-1925. New York Jets ADA Ticket Purchases call 973-549-4585. For wheelchair accessible and limited mobility patrons for non-NFL events, please click on the \"Request Accessible Tickets\" icon on the right side of the page to be taken to a dedicated page for accessible seating purchases. Please request the total number of wheelchair plus companion seats or limited mobility plus companion seats within the same wheelchair dropdown box so you may sit together.",
                  "generalInfo": {
                    "generalRule": "MetLife Stadium is committed to promoting a memorable event day experience for all fans. With that goal in mind, we have developed our Guest Code of Conduct to which we strongly encourage all guests to adhere. Keeping MetLife Stadium and Plaza SMOKE-FREE",
                    "childRule": "For non-NFL events, children under 34 inches height do not require a ticket of their own but must share a seat with an accompanying adult. All children taller than 34 inches require a ticket of their own. For New York Jets games this 34\" rule applies For New York Giants games all guest need a ticket regardless of age. Please contact the stadium directly regarding the suitability of an event for children."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 21,
                    "_total": 21,
                    "_filtered": 0
                  },
                  "ada": {
                    "adaPhones": "For NFL New York Giants: 888-694-1925\n             \nFor NFL New York Jets: 973-549-4585               \n            \nFor NON-NFL Events: 1-800-877-7575\n\n",
                    "adaCustomCopy": "For NFL New York Giants: 888-694-1925\n             \nFor NFL New York Jets: 973-549-4585                \n\nFor NON-NFL Events: 1-800-877-7575",
                    "adaHours": "Monday - Friday, 9:00am - 5:00pm"
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK Live 2024",
            "type": "event",
            "id": "vvG1HZ90nBI3Rk",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-live-2024-tacoma-washington-09-03-2024/event/0F005E4ABAA12BC6",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-02-24T18:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-09-04T03:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-02-21T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-02-21T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-02-23T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-09-20T05:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-02-21T18:00:00Z",
                  "endDateTime": "2023-02-24T17:45:00Z",
                  "name": "Official Platinum Presale"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-10-18T04:30:00Z",
                  "name": "Official Platinum"
                },
                {
                  "startDateTime": "2023-02-21T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-10-11T05:00:00Z",
                  "name": "VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-02-23T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Venue Presale"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-09-20T05:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-09-03",
                "localTime": "19:30:00",
                "dateTime": "2024-09-04T02:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "initialStartDate": {
                "localDate": "2023-10-17",
                "localTime": "19:30:00",
                "dateTime": "2023-10-18T02:30:00Z"
              },
              "timezone": "America/Los_Angeles",
              "status": {
                "code": "rescheduled"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "pleaseNote": "Originally scheduled for Oct. 17, 2023 at 7:30p Previously purchased tickets will be honored for the new date",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 74.0,
                "max": 384.0
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0F005E4ABAA12BC6/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "doorsTimes": {
              "localDate": "2023-10-17",
              "localTime": "18:30:00",
              "dateTime": "2023-10-18T01:30:00Z"
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1HZ90nBI3Rk?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpa3zGe?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Tacoma Dome",
                  "type": "venue",
                  "id": "KovZpa3zGe",
                  "test": false,
                  "url": "https://www.ticketmaster.com/tacoma-dome-tickets-tacoma/venue/122998",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/18532v.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "98421",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Tacoma"
                  },
                  "state": {
                    "name": "Washington",
                    "stateCode": "WA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "2727 East D St"
                  },
                  "location": {
                    "longitude": "-122.426834",
                    "latitude": "47.23634"
                  },
                  "markets": [
                    {
                      "name": "Seattle Area",
                      "id": "42"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 385
                    },
                    {
                      "id": 391
                    },
                    {
                      "id": 418
                    }
                  ],
                  "social": {
                    "twitter": {
                      "handle": "@TacomaDome"
                    }
                  },
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "Tacoma Dome Administration Office: (253) 272-3663",
                    "openHoursDetail": "Temporary Hours of Operation Monday - Friday: 10am - 5pm Sunday & Saturday - Closed",
                    "acceptedPaymentDetail": "Cash, Visa, MasterCard, Discover, American Express",
                    "willCallDetail": "Tickets held at will call can be picked up on the day of the performance usually beginning 2 hours prior to showtime. The customer must present a valid form of identification, the actual credit card, and the confirmation number."
                  },
                  "parkingDetail": "Limited on-site Tacoma Dome parking is available. The price per car is $10 - $30 depending on the event. Visit www.tacomadome.org for additional information on parking, directions and alternate transportation options.",
                  "accessibleSeatingDetail": "Accessible seating is located in sections Floor, 101-108, 114-121 & 211. Click on the \"ADA\" symbol to help process your order.",
                  "generalInfo": {
                    "generalRule": "No recording devices are allowed. No smoking is allowed in the building. Please visit www.tacomadome.org for additional information on venue policies, procedures and prohibited items.",
                    "childRule": "The child policy varies per event. For most events children 2yrs & under are free on lap."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 19,
                    "_total": 19,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpa3zGe?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG1FZ9zk0cfPA",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-hershey-pennsylvania-10-01-2024/event/02005F81A4B54945",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T15:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-10-01T22:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Venue/Radio Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "P!NK VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-25T02:00:00Z",
                  "name": "P!NK VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-04T02:00:00Z",
                  "name": "Verizon Up Select Seats"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-02T02:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-10-01",
                "localTime": "18:30:00",
                "dateTime": "2024-10-01T22:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/New_York",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "info": "We are now a cashless venue. All major credit cards are accepted. Patrons 2yrs and older require a ticket. Artist(s) subject to change. Due to security enhancements, please arrive at least 45-60 minutes prior to event time. Please only bring essential items with you. Hersheypark Stadium will only permit bags 5\"x8\"x1\" or smaller, which includes hand clutches, wristlets and small purses. Any bags/backpacks that are larger in size will need to be returned to the owners vehicle or disposed of. No audio/video recording. Rain Or Shine Tickets can be purchased online up until the event start time. After this time, if tickets are still available, they can be purchased at the Hersheypark Stadium Box Office.",
            "pleaseNote": "We are now a cashless venue. All major credit cards are accepted. Patrons 2yrs and older require a ticket. Artist(s) subject to change. Due to security enhancements, please arrive at least 45-60 minutes prior to event time. Please only bring essential items with you. Hersheypark Stadium will only permit bags 5\"x8\"x1\" or smaller, which includes hand clutches, wristlets and small purses. Any bags/backpacks that are larger in size will need to be returned to the owners vehicle or disposed of. No audio/video recording. Rain Or Shine Tickets can be purchased online up until the event start time. After this time, if tickets are still available, they can be purchased at the Hersheypark Stadium Box Office.",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 49.95,
                "max": 319.95
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/02005F81A4B54945/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1FZ9zk0cfPA?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpaoU8e?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Hersheypark Stadium",
                  "type": "venue",
                  "id": "KovZpaoU8e",
                  "test": false,
                  "url": "https://www.ticketmaster.com/hersheypark-stadium-tickets-hershey/venue/16394",
                  "locale": "en-us",
                  "aliases": [
                    "hershey",
                    "hersheypark",
                    "hershey stadium"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/22391v.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "postalCode": "17033",
                  "timezone": "America/New_York",
                  "city": {
                    "name": "Hershey"
                  },
                  "state": {
                    "name": "Pennsylvania",
                    "stateCode": "PA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "100 W Hersheypark Dr"
                  },
                  "location": {
                    "longitude": "-76.660281",
                    "latitude": "40.290715"
                  },
                  "markets": [
                    {
                      "name": "Philadelphia",
                      "id": "18"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 294
                    },
                    {
                      "id": 358
                    },
                    {
                      "id": 416
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "(717) 534-3911 www.hersheypa.com (All Venues) www.giantcenter.net (Giant Center)",
                    "openHoursDetail": "Hersheypark Stadium BOX OFFICE is only open on day of event.",
                    "acceptedPaymentDetail": "Cash, Check and all major credit cards.",
                    "willCallDetail": "Pick up tickets on day of show at the Stadium Box Office, after 9:00a.m. Bring a valid photo I.D. for tickets and confirmation number and credit card used."
                  },
                  "parkingDetail": "Parking fee is charged.",
                  "accessibleSeatingDetail": "Fully Acessible. All special seating needs please contact the box office at 717-534-3911.",
                  "generalInfo": {
                    "generalRule": "All hand carried items, including backpacks, belt bag and purses will be searched.Guests are encouraged to keep nonessential items in their vehicles. -No umbrellas,lawn chairs, food, beverages or coolers. -No audio/video tape recording devises allowed. -Smoking only in designated areas. -No food, beverages, or coolers permitted. -Once in the venue, you may not leave the premises. If so, you will be recharged admission to enter. -No camping or loitering. -Posters and signs are not permitted into the Venue. -All events are all-weather events.",
                    "childRule": "All patrons who have reached their 2nd birthday need a ticket, however, for some family shows (ex:Sesame) anyone aged 1 or over needs a ticket."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 14,
                    "_total": 14,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpaoU8e?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Los Angeles Lakers vs Golden State Warriors",
            "type": "event",
            "id": "G5eYZ9sej38gI",
            "test": false,
            "url": "https://www.ticketmaster.com/los-angeles-lakers-vs-golden-state-los-angeles-california-04-09-2024/event/2C005F109C490D68",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false,
                "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-08-25T19:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-10T02:00:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-08-25T17:00:00Z",
                  "endDateTime": "2023-08-25T19:00:00Z",
                  "name": "Presale - Wait List"
                },
                {
                  "startDateTime": "2023-08-25T17:00:00Z",
                  "endDateTime": "2023-08-25T19:00:00Z",
                  "name": "Presale - Subscribers"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-04-09",
                "localTime": "19:00:00",
                "dateTime": "2024-04-10T02:00:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/Los_Angeles",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAde",
                  "name": "Basketball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vFJA",
                  "name": "NBA"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7l1",
                  "name": "Group"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7vA7d",
                  "name": "Team"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "695",
              "name": "NBA REGULAR SEASON",
              "description": "NBA REGULAR SEASON / NTL / USA"
            },
            "promoters": [
              {
                "id": "695",
                "name": "NBA REGULAR SEASON",
                "description": "NBA REGULAR SEASON / NTL / USA"
              }
            ],
            "pleaseNote": "The Lakers will strictly adhere to all State of California, LA County, and NBA then-existing protocols at the time you attend each game. We will reach out to ticket purchasers with more information prior to each game with any necessary health and safety information.",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 125.0,
                "max": 7350.0
              }
            ],
            "products": [
              {
                "name": "Lakers Parking",
                "id": "G5eYZ9se_fYsu",
                "url": "https://www.ticketmaster.com/lakers-parking-los-angeles-california-04-09-2024/event/2C005F1099530C4D",
                "type": "Parking",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/2C005F109C490D68/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 6 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/G5eYZ9sej38gI?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ91718T0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpZAEdntA?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Crypto.com Arena",
                  "type": "venue",
                  "id": "KovZpZAEdntA",
                  "test": false,
                  "url": "https://www.ticketmaster.com/cryptocom-arena-tickets-los-angeles/venue/360457",
                  "locale": "en-us",
                  "aliases": [
                    "staples",
                    "staples center"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/22291v.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "postalCode": "90015",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Los Angeles"
                  },
                  "state": {
                    "name": "California",
                    "stateCode": "CA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1111 S. Figueroa St"
                  },
                  "location": {
                    "longitude": "-118.267253",
                    "latitude": "34.043003"
                  },
                  "markets": [
                    {
                      "name": "Los Angeles",
                      "id": "27"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 223
                    },
                    {
                      "id": 324
                    },
                    {
                      "id": 354
                    },
                    {
                      "id": 383
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "213-742-7340",
                    "openHoursDetail": "Box office is located on North side of building at 11th and South Figueroa. Box office hours are 10am to 6pm, Monday through Saturday. It is open extended hours on event day. Phone: 213-742-7340 SUMMER HOURS Closed Saturdays and Sundays unless there is an event, the box office will open at 9am on Saturdays or 10am on Sundays only if there is an event. The box office will have extended hours on all event days.",
                    "willCallDetail": "Crypto.com Arena does not accept Will Call drop off. Alternate Will Call Procedure (Alternate Pick Up) If a person (other than the person ordering and paying for the tickets) is picking up a Will Call order, the Alternate Pick-Up's name MUST be on the account. To add the name of an alternate pick-up to the account, the original purchaser must contact Ticketmaster Customer Service at 1-800-745-3000, verify their account information and request the addition an alternate pick-up."
                  },
                  "parkingDetail": "Parking for Guests with Disabilities: Designated parking is available in LOT W and LOT 7 for guests with disabilities at Crypto.com Arena, including van accessible spaces. These spaces are designated for vehicles displaying a current State-issued disability placard or license plate, and can be accessed 2 and a half hour prior to show time, general parking fees apply. Parking Passes for Guests with Disabilities can be purchased 10 days prior to the day of the event through Crypto.com Arena Parking Department. Please call 213-765-6815 for further information. Limousines: Limousines may drop guests off on 11th Street (Figueroa between Chick Hearn Court and 12th Street). Parking for Limousines is in Lot # 7 and the parking rate is $50.00.(Rate may increase depending on the Size of the Limousine). Limousines will not have access to the 11th street drop-off and may not drop off or pick up on Chick Hearn Court. Clients will need to walk across Figueroa St into Lot # 7 to their limousines. Crypto.com Arena Parking Office: 213-765-6815",
                  "generalInfo": {
                    "generalRule": "No Bottles, Cans, Or Coolers. No Smoking In Arena. No Cameras Or Recording Devices At Concerts! Cameras w/No Flash Allowed For Sporting Events Only!",
                    "childRule": "Some events require all attendees, regardless of age, to present a ticket for entry. Please check the event ticket policies at the time of purchase. Children age three (3) and above require a ticket for Los Angeles Lakers, Los Angeles Clippers, Los Angeles Kings and Los Angeles Sparks games."
                  },
                  "upcomingEvents": {
                    "tmr": 78,
                    "ticketmaster": 14,
                    "_total": 92,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpZAEdntA?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "Los Angeles Lakers",
                  "type": "attraction",
                  "id": "K8vZ91718T0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/lakers"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Lakers"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/lakers"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/lakers"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/lakers/"
                      }
                    ]
                  },
                  "aliases": [
                    "los angeles lakers",
                    "la lakers",
                    "laker",
                    "laker tickets",
                    "lakers tickets"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 1,
                    "ticketmaster": 2,
                    "_total": 3,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91718T0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Golden State Warriors",
                  "type": "attraction",
                  "id": "K8vZ9171oa0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/golden-state-warriors-tickets/artist/805946",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/warriors"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Golden_State_Warriors"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/warriors"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/warriors"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/warriors/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/c/8d5/f95bdd17-1d94-4e98-9295-641e4db558d5_105621_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": true
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketmaster": 22,
                    "_total": 22,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oa0?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG1fZ9MD144Ni",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-indianapolis-indiana-10-12-2024/event/05005F7ECA5558EC",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T15:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-10-12T22:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "P!NK VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-10-06T02:00:00Z",
                  "name": "P!NK VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-07T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-13T02:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Colts Presale"
                },
                {
                  "startDateTime": "2023-12-09T15:00:00Z",
                  "endDateTime": "2023-12-11T03:00:00Z",
                  "name": "Venue Presale"
                },
                {
                  "startDateTime": "2023-12-11T15:00:00Z",
                  "endDateTime": "2024-09-15T02:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-10-12",
                "localTime": "18:30:00",
                "dateTime": "2024-10-12T22:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/New_York",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "info": "All individuals attending this event must have a ticket, regardless of age. Clear Bag Policy will be in effect.",
            "pleaseNote": "All individuals attending this event must have a ticket, regardless of age. Clear Bag Policy will be in effect.",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 49.95,
                "max": 299.95
              }
            ],
            "products": [
              {
                "name": "PARKWHIZ LUCAS OIL STADIUM",
                "id": "vvG1fZ9MzK29F5",
                "url": "https://www.ticketmaster.com/parkwhiz-lucas-oil-stadium-indianapolis-indiana-10-12-2024/event/05005F7E133D720B",
                "type": "Upsell",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/05005F7ECA5558EC/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1fZ9MD144Ni?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpZAdEJEA?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Lucas Oil Stadium",
                  "type": "venue",
                  "id": "KovZpZAdEJEA",
                  "test": false,
                  "url": "https://www.ticketmaster.com/lucas-oil-stadium-tickets-indianapolis/venue/41855",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/8617v.gif",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "46225",
                  "timezone": "America/New_York",
                  "city": {
                    "name": "Indianapolis"
                  },
                  "state": {
                    "name": "Indiana",
                    "stateCode": "IN"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "500 S. Capitol Ave."
                  },
                  "location": {
                    "longitude": "-86.163821",
                    "latitude": "39.76007"
                  },
                  "markets": [
                    {
                      "name": "Indianapolis and More",
                      "id": "23"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 274
                    },
                    {
                      "id": 281
                    },
                    {
                      "id": 303
                    },
                    {
                      "id": 314
                    },
                    {
                      "id": 390
                    },
                    {
                      "id": 397
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "Lucas Oil Stadium Ticket Office: (317) 262-3389 Colts Ticket Office (317) 297-7000",
                    "openHoursDetail": "Mon-Fri: 9:00am - 5:00pm Sat-Sun: Closed Event Days: Varies by individual event-call box office.",
                    "acceptedPaymentDetail": "Box Office accepts: Cash, Visa, MC, Discover, Amex. Accepted methods of payments vary by event.",
                    "willCallDetail": "Orders are available for pick up the week of the event Tues-Fri 9am-5pm. Ticket Office is located on the SE corner of the stadium"
                  },
                  "parkingDetail": "Parking available around building and in downtown Indianapolis for a fee. Fee varies per event.",
                  "accessibleSeatingDetail": "Yes. Sold through the Stadium or Ticketmaster. Limited Seating. Elevators are available at this venue. Hearing devices are available upon request.",
                  "generalInfo": {
                    "generalRule": "CAMERAS: Refer to Box Office. RECORDING DEVICES: Are not permitted. PROHIBITED ITEMS: No smoking in this venue. Doors Open: generally 90 minutes prior to event",
                    "childRule": "Varies by event-refer to Box Office. For Colts' games everyone must have a ticket. NCAA Events – Everyone must have a ticket."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 32,
                    "_total": 32,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpZAdEJEA?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "New Orleans Pelicans vs. Los Angeles Lakers",
            "type": "event",
            "id": "Z7r9jZ1AdJ9us",
            "test": false,
            "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdJ9us",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_SOURCE",
                "width": 2048,
                "height": 1152,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "1900-01-01T18:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-14T19:30:00Z"
              }
            },
            "dates": {
              "start": {
                "localDate": "2024-04-14",
                "localTime": "14:30:00",
                "dateTime": "2024-04-14T19:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAde",
                  "name": "Basketball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vFJA",
                  "name": "NBA"
                },
                "family": false
              }
            ],
            "outlets": [
              {
                "url": "https://www.ticketmaster.com/new-orleans-pelicans-vs-los-angeles-new-orleans-louisiana-04-14-2024/event/Zu0FM1R0e5tf1Bz",
                "type": "tmMarketPlace"
              }
            ],
            "seatmap": {
              "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/1191-153-3-0-SmoothieKingCenterNOPelicans79303.png"
            },
            "ticketing": {
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/Z7r9jZ1AdJ9us?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oaV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91718T0?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/ZFr9jZee1e?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Smoothie King Center",
                  "type": "venue",
                  "id": "ZFr9jZee1e",
                  "test": false,
                  "locale": "en-us",
                  "postalCode": "70113",
                  "timezone": "America/Chicago",
                  "city": {
                    "name": "New Orleans"
                  },
                  "state": {
                    "name": "Louisiana",
                    "stateCode": "LA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1501 Dave Dixon Drive"
                  },
                  "location": {
                    "longitude": "-90.082802",
                    "latitude": "29.9429"
                  },
                  "dmas": [
                    {
                      "id": 344
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 19,
                    "ticketmaster": 16,
                    "_total": 35,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/ZFr9jZee1e?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "New Orleans Pelicans",
                  "type": "attraction",
                  "id": "K8vZ9171oaV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/new-orleans-pelicans-tickets/artist/805910",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "http://www.twitter.com/pelicansnba"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/New_Orleans_Pelicans"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "http://www.facebook.com/pelicansnba"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "http://www.instagram.com/pelicansnba"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/pelicans/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_1340051_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/b1c/4be191e2-6357-433c-a421-aa1ffb2e8b1c_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 19,
                    "ticketmaster": 3,
                    "_total": 22,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oaV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Los Angeles Lakers",
                  "type": "attraction",
                  "id": "K8vZ91718T0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/lakers"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Lakers"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/lakers"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/lakers"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.nba.com/lakers/"
                      }
                    ]
                  },
                  "aliases": [
                    "los angeles lakers",
                    "la lakers",
                    "laker",
                    "laker tickets",
                    "lakers tickets"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d42/e51f1140-db0d-4664-84ef-0d41f9da6d42_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false,
                      "attribution": "Prior image was just below specs, somehow is not being read, this image is to full spec."
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAde",
                        "name": "Basketball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vFJA",
                        "name": "NBA"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 1,
                    "ticketmaster": 2,
                    "_total": 3,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91718T0?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK Live 2024",
            "type": "event",
            "id": "vvG1HZ90nBt3RO",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-live-2024-tacoma-washington-09-04-2024/event/0F005E4ABAA52BE0",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-02-24T18:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-09-05T03:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-02-22T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-02-22T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-02-22T18:00:00Z",
                  "endDateTime": "2023-02-24T17:45:00Z",
                  "name": "Official Platinum Presale"
                },
                {
                  "startDateTime": "2023-02-22T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-02-23T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-02-23T18:00:00Z",
                  "endDateTime": "2023-02-24T06:00:00Z",
                  "name": "Local Presale"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-10-19T04:30:00Z",
                  "name": "Official Platinum"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-10-12T05:00:00Z",
                  "name": "VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-09-21T05:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-02-24T18:00:00Z",
                  "endDateTime": "2023-09-21T05:00:00Z",
                  "name": "Verizon Up Select Seats"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-09-04",
                "localTime": "19:30:00",
                "dateTime": "2024-09-05T02:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "initialStartDate": {
                "localDate": "2023-10-18",
                "localTime": "19:30:00",
                "dateTime": "2023-10-19T02:30:00Z"
              },
              "timezone": "America/Los_Angeles",
              "status": {
                "code": "rescheduled"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "pleaseNote": "Originally scheduled for Oct. 18, 2023 at 7:30p. Previously purchased tickets will be honored for the new date",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 63.95,
                "max": 299.95
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0F005E4ABAA52BE0/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "doorsTimes": {
              "localDate": "2023-10-18",
              "localTime": "18:30:00",
              "dateTime": "2023-10-19T01:30:00Z"
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1HZ90nBt3RO?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpa3zGe?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Tacoma Dome",
                  "type": "venue",
                  "id": "KovZpa3zGe",
                  "test": false,
                  "url": "https://www.ticketmaster.com/tacoma-dome-tickets-tacoma/venue/122998",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/18532v.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "98421",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Tacoma"
                  },
                  "state": {
                    "name": "Washington",
                    "stateCode": "WA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "2727 East D St"
                  },
                  "location": {
                    "longitude": "-122.426834",
                    "latitude": "47.23634"
                  },
                  "markets": [
                    {
                      "name": "Seattle Area",
                      "id": "42"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 385
                    },
                    {
                      "id": 391
                    },
                    {
                      "id": 418
                    }
                  ],
                  "social": {
                    "twitter": {
                      "handle": "@TacomaDome"
                    }
                  },
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "Tacoma Dome Administration Office: (253) 272-3663",
                    "openHoursDetail": "Temporary Hours of Operation Monday - Friday: 10am - 5pm Sunday & Saturday - Closed",
                    "acceptedPaymentDetail": "Cash, Visa, MasterCard, Discover, American Express",
                    "willCallDetail": "Tickets held at will call can be picked up on the day of the performance usually beginning 2 hours prior to showtime. The customer must present a valid form of identification, the actual credit card, and the confirmation number."
                  },
                  "parkingDetail": "Limited on-site Tacoma Dome parking is available. The price per car is $10 - $30 depending on the event. Visit www.tacomadome.org for additional information on parking, directions and alternate transportation options.",
                  "accessibleSeatingDetail": "Accessible seating is located in sections Floor, 101-108, 114-121 & 211. Click on the \"ADA\" symbol to help process your order.",
                  "generalInfo": {
                    "generalRule": "No recording devices are allowed. No smoking is allowed in the building. Please visit www.tacomadome.org for additional information on venue policies, procedures and prohibited items.",
                    "childRule": "The child policy varies per event. For most events children 2yrs & under are free on lap."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 19,
                    "_total": 19,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpa3zGe?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "Los Angeles Dodgers vs. San Diego Padres",
            "type": "event",
            "id": "Z7r9jZ1AdP97F",
            "test": false,
            "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdP97F",
            "locale": "en-us",
            "images": [
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_SOURCE",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "1900-01-01T06:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-04-14T23:10:00Z"
              }
            },
            "dates": {
              "start": {
                "localDate": "2024-04-14",
                "localTime": "16:10:00",
                "dateTime": "2024-04-14T23:10:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nE",
                  "name": "Sports"
                },
                "genre": {
                  "id": "KnvZfZ7vAdv",
                  "name": "Baseball"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7vF1n",
                  "name": "MLB"
                },
                "family": false
              }
            ],
            "outlets": [
              {
                "url": "https://www.ticketmaster.com/los-angeles-dodgers-vs-san-diego-los-angeles-california-04-14-2024/event/Zu0FM1R0e5tQ1F8",
                "type": "tmMarketPlace"
              }
            ],
            "seatmap": {
              "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/1/VenueMaps/475-481-3-0-DodgerStadiumLADodgers.png"
            },
            "ticketing": {
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/Z7r9jZ1AdP97F?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91718BV?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Dodger Stadium",
                  "type": "venue",
                  "id": "Z6r9jZAFke",
                  "test": false,
                  "locale": "en-us",
                  "postalCode": "90012",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Los Angeles"
                  },
                  "state": {
                    "name": "California",
                    "stateCode": "CA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "1000 Elysian Park Ave."
                  },
                  "location": {
                    "longitude": "-118.2388",
                    "latitude": "34.0658"
                  },
                  "dmas": [
                    {
                      "id": 324
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 73,
                    "ticketmaster": 1,
                    "_total": 74,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/Z6r9jZAFke?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "Los Angeles Dodgers",
                  "type": "attraction",
                  "id": "K8vZ9171oA0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/los-angeles-dodgers-tickets/artist/805959",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/Dodgers"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Los_Angeles_Dodgers"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/Dodgers/"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/dodgers/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.mlb.com/dodgers"
                      }
                    ]
                  },
                  "aliases": [
                    "dodgers baseball",
                    "los angeles dodgers",
                    "la dodgers"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/eb3/9ec01308-9d94-4413-92e2-8d0dc9fe8eb3_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAdv",
                        "name": "Baseball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vF1n",
                        "name": "MLB"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 117,
                    "ticketmaster": 38,
                    "_total": 155,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171oA0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "San Diego Padres",
                  "type": "attraction",
                  "id": "K8vZ91718BV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/san-diego-padres-tickets/artist/806014",
                  "locale": "en-us",
                  "externalLinks": {
                    "twitter": [
                      {
                        "url": "https://twitter.com/padres"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/San_Diego_Padres"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/Padres"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/padres"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "https://www.mlb.com/padres"
                      }
                    ]
                  },
                  "aliases": [
                    "padres baseball",
                    "san diego padres"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_SOURCE",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/890/45fcf8da-fe3d-4b9b-8eeb-6052cef64890_1343261_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nE",
                        "name": "Sports"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAdv",
                        "name": "Baseball"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vF1n",
                        "name": "MLB"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7l1",
                        "name": "Group"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vA7d",
                        "name": "Team"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "tmr": 58,
                    "ticketmaster": 91,
                    "_total": 149,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91718BV?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "G5vjZ9MgvYMih",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-las-vegas-nevada-09-13-2024/event/17005F7D41C37B1B",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T18:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-09-14T05:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-07T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Citi® Cardmember Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-11T18:00:00Z",
                  "endDateTime": "2024-08-15T05:00:00Z",
                  "name": "Citi® Cardmember Preferred Tickets"
                },
                {
                  "startDateTime": "2023-12-07T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "P!NK VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-11T18:00:00Z",
                  "endDateTime": "2024-09-07T05:00:00Z",
                  "name": "P!NK VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-07T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                },
                {
                  "startDateTime": "2023-12-11T18:00:00Z",
                  "endDateTime": "2024-08-17T05:00:00Z",
                  "name": "Verizon Up Select Seats"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "MGM Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Caesars Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Allegiant Stadium Presale"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-09-13",
                "localTime": "18:30:00",
                "dateTime": "2024-09-14T01:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/Los_Angeles",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 79.95,
                "max": 320.0
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/17005F7D41C37B1B/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {
              "ticketLimit": 4
            },
            "ticketLimit": {
              "info": "There is an eight (8) ticket limit on this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/G5vjZ9MgvYMih?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZ917Ax7n?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Allegiant Stadium",
                  "type": "venue",
                  "id": "KovZ917Ax7n",
                  "test": false,
                  "url": "https://www.ticketmaster.com/allegiant-stadium-tickets-las-vegas/venue/189482",
                  "locale": "en-us",
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dbimages/22052v.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    }
                  ],
                  "postalCode": "89118",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "Las Vegas "
                  },
                  "state": {
                    "name": "Nevada",
                    "stateCode": "NV"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "3333 Al Davis Way"
                  },
                  "location": {
                    "longitude": "-115.1833",
                    "latitude": "36.0909"
                  },
                  "markets": [
                    {
                      "name": "Las Vegas",
                      "id": "14"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 319
                    }
                  ],
                  "boxOfficeInfo": {
                    "phoneNumberDetail": "Allegiant Stadium Box Office: 725-780-2100 Visit www.allegiantstadium.com for complete venue information.",
                    "openHoursDetail": "Standard Hours: Monday - Friday, 11:00AM - 5:00PM Event & Game Day Hours: 4 hours prior to event time/kick-off **Available for guest assistance only - Tickets are NOT sold at the box office**",
                    "acceptedPaymentDetail": "Tickets are NOT sold at the Box Office windows. Verified tickets are available exclusively at www.ticketmaster.com",
                    "willCallDetail": "Will Call tickets may be picked up at the Ticketmaster Box Office at Allegiant Stadium beginning 4 hours prior to event time/kick-off. Government issued photo identification is required to claim will call tickets. Will call drop-off tickets are not permitted. Tickets are NOT sold at the Box Office windows. Verified tickets are available exclusively at www.ticketmaster.com"
                  },
                  "parkingDetail": "Parking Passes: -Raiders season parking passes are good for Raiders games only. Parking passes can only be accessed digitally via the Raiders official app. -Single game and event parking passes are available for select lots and can be purchased via the SpotHero app. -Purchasing parking upon arrival is based on availability. We strongly encourage you to purchase your parking pass in advance of the event. Accessible Parking: -All accessible parking spaces require a valid ADA placard or a valid ADA license plate. -If accessible parking is full, ADA placards or plate holders will be offered the next available parking space in the reserved parking lots. -ADA placards or plates alone do not grant access to the Allegiant Stadium lots. Oversized Vehicles: -Oversized vehicles, designated as vehicles longer than 20 feet, and trailers are not permitted. -RVs and oversized vehicles should contact the Oasis RV Park for park and ride options.",
                  "accessibleSeatingDetail": "Accessible seating is located throughout Allegiant Stadium and is available on ticketmaster.com. Please look for seats designated with an accessible icon to purchase. For additional accessible needs or questions, please email boxoffice@allegiantstadium.com or call the box office at 725-780-2100.",
                  "generalInfo": {
                    "generalRule": "CLEAR BAG POLICY: - Bags must be clear plastic, vinyl or PVC and must not exceed 12 x 6 x 12 - Small clutch bags, 4.5x 6.5 x 2 can be taken into the stadium with one of the approved clear bags * An exception will be made for any necessary medical items after proper inspection at entry. CASHLESS VENUE: Allegiant Stadium is a cashless venue. Cash will not be accepted as a form of payment at any parking, retail, or concession locations. Guests may convert their cash to a debit card by using one of the Cash-to-Card kiosks located throughout the stadium. Any remaining balance on the debit card can be used at locations where debit payments are accepted. PROHIBITED ITEMS: Prohibited items include, but are not limited to, purses larger than a clutch bag, coolers, briefcases, backpacks, fanny packs, cinch bags, seat cushions, luggage of any kind, computer bags, and camera bags or any bag larger than the permissible size. ADDITIONAL VENUE INFO: For complete venue information, policies, and prohibited items, please visit: www.allegiantstadium.com/plan-your-visit",
                    "childRule": "Children under 24 months do not need a ticket to enter Allegiant Stadium, provided that they are seated on a parents or guardians lap, and do not interfere with the sightlines of others. Children must have a ticket to receive a promotional item. This policy is subject to change on an event by event basis. Any variance will be noted on the event purchase page, More Info tab, on ticketmaster.com."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 38,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZ917Ax7n?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          },
          {
            "name": "P!NK: Summer Carnival 2024",
            "type": "event",
            "id": "vvG1IZ9MV6Cf_5",
            "test": false,
            "url": "https://www.ticketmaster.com/pnk-summer-carnival-2024-san-diego-california-09-11-2024/event/0A005F7D0739464B",
            "locale": "en-us",
            "images": [
              {
                "ratio": "4_3",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                "width": 305,
                "height": 225,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                "width": 640,
                "height": 360,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                "width": 2426,
                "height": 1365,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                "width": 305,
                "height": 203,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                "width": 2048,
                "height": 1152,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                "width": 1024,
                "height": 683,
                "fallback": false
              },
              {
                "ratio": "3_2",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                "width": 640,
                "height": 427,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                "width": 1136,
                "height": 639,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                "width": 1024,
                "height": 576,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                "width": 205,
                "height": 115,
                "fallback": false
              },
              {
                "ratio": "16_9",
                "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                "width": 100,
                "height": 56,
                "fallback": false
              }
            ],
            "sales": {
              "public": {
                "startDateTime": "2023-12-11T18:00:00Z",
                "startTBD": false,
                "startTBA": false,
                "endDateTime": "2024-09-12T03:30:00Z"
              },
              "presales": [
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Sheryl Crow Artist Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Live Nation Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Ticketmaster Presale"
                },
                {
                  "startDateTime": "2023-12-09T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Venue Presale"
                },
                {
                  "startDateTime": "2023-12-07T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "P!NK VIP Packages Presale"
                },
                {
                  "startDateTime": "2023-12-11T18:00:00Z",
                  "endDateTime": "2024-09-05T05:00:00Z",
                  "name": "P!NK VIP Packages Onsale"
                },
                {
                  "startDateTime": "2023-12-11T18:00:00Z",
                  "endDateTime": "2024-08-15T05:00:00Z",
                  "name": "Verizon Up Select Seats"
                },
                {
                  "startDateTime": "2023-12-07T18:00:00Z",
                  "endDateTime": "2023-12-11T06:00:00Z",
                  "name": "Verizon Up Presale Tickets"
                }
              ]
            },
            "dates": {
              "start": {
                "localDate": "2024-09-11",
                "localTime": "18:30:00",
                "dateTime": "2024-09-12T01:30:00Z",
                "dateTBD": false,
                "dateTBA": false,
                "timeTBA": false,
                "noSpecificTime": false
              },
              "timezone": "America/Los_Angeles",
              "status": {
                "code": "onsale"
              },
              "spanMultipleDays": false
            },
            "classifications": [
              {
                "primary": true,
                "segment": {
                  "id": "KZFzniwnSyZfZ7v7nJ",
                  "name": "Music"
                },
                "genre": {
                  "id": "KnvZfZ7vAeA",
                  "name": "Rock"
                },
                "subGenre": {
                  "id": "KZazBEonSMnZfZ7v6F1",
                  "name": "Pop"
                },
                "type": {
                  "id": "KZAyXgnZfZ7v7nI",
                  "name": "Undefined"
                },
                "subType": {
                  "id": "KZFzBErXgnZfZ7v7lJ",
                  "name": "Undefined"
                },
                "family": false
              }
            ],
            "promoter": {
              "id": "653",
              "name": "LIVE NATION MUSIC",
              "description": "LIVE NATION MUSIC / NTL / USA"
            },
            "promoters": [
              {
                "id": "653",
                "name": "LIVE NATION MUSIC",
                "description": "LIVE NATION MUSIC / NTL / USA"
              }
            ],
            "info": "Show: 6:30 pm",
            "priceRanges": [
              {
                "type": "standard",
                "currency": "USD",
                "min": 45.95,
                "max": 320.95
              }
            ],
            "products": [
              {
                "name": "Pink Parking",
                "id": "vvG1IZ9zintduN",
                "url": "https://www.ticketmaster.com/pink-parking-san-diego-california-09-11-2024/event/0A005F8B2AA43363",
                "type": "Parking",
                "classifications": [
                  {
                    "primary": true,
                    "segment": {
                      "id": "KZFzniwnSyZfZ7v7n1",
                      "name": "Miscellaneous"
                    },
                    "genre": {
                      "id": "KnvZfZ7v7ll",
                      "name": "Undefined"
                    },
                    "subGenre": {
                      "id": "KZazBEonSMnZfZ7vAv1",
                      "name": "Undefined"
                    },
                    "type": {
                      "id": "KZAyXgnZfZ7vAva",
                      "name": "Parking"
                    },
                    "subType": {
                      "id": "KZFzBErXgnZfZ7vAFe",
                      "name": "Regular"
                    },
                    "family": false
                  }
                ]
              }
            ],
            "seatmap": {
              "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/0A005F7D0739464B/staticImage?type=png&systemId=HOST"
            },
            "accessibility": {},
            "ticketLimit": {
              "info": "There is an overall 8 ticket limit for this event."
            },
            "ageRestrictions": {
              "legalAgeEnforced": false
            },
            "ticketing": {
              "safeTix": {
                "enabled": true
              },
              "allInclusivePricing": {
                "enabled": false
              }
            },
            "_links": {
              "self": {
                "href": "/discovery/v2/events/vvG1IZ9MV6Cf_5?locale=en-us"
              },
              "attractions": [
                {
                  "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                },
                {
                  "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                }
              ],
              "venues": [
                {
                  "href": "/discovery/v2/venues/KovZpa4cFe?locale=en-us"
                }
              ]
            },
            "_embedded": {
              "venues": [
                {
                  "name": "Petco Park",
                  "type": "venue",
                  "id": "KovZpa4cFe",
                  "test": false,
                  "url": "https://www.ticketmaster.com/petco-park-tickets-san-diego/venue/82561",
                  "locale": "en-us",
                  "postalCode": "92101",
                  "timezone": "America/Los_Angeles",
                  "city": {
                    "name": "San Diego"
                  },
                  "state": {
                    "name": "California",
                    "stateCode": "CA"
                  },
                  "country": {
                    "name": "United States Of America",
                    "countryCode": "US"
                  },
                  "address": {
                    "line1": "100 Park Blvd"
                  },
                  "location": {
                    "longitude": "-117.15680771",
                    "latitude": "32.70709659"
                  },
                  "markets": [
                    {
                      "name": "San Diego",
                      "id": "20"
                    }
                  ],
                  "dmas": [
                    {
                      "id": 381
                    }
                  ],
                  "boxOfficeInfo": {
                    "openHoursDetail": "Tickets for the concert are not available for purchase in person at the Petco Park Box Office prior to the show date. On the day of the show, tickets will be available at the Petco Park Box Office, should any remain. Tickets for Metallica can be purchased online or over the phone by calling 866-448-7849 anytime or you can speak to a customer service agent by calling Ticketmaster at 800-745-3000 Monday – Saturday: 9am – 6pm and Sunday: 12pm – 6pm Pacific Time.",
                    "acceptedPaymentDetail": "Mastercard, Visa, American Express, cash",
                    "willCallDetail": "Will Call will open at the Main Box Office, located at the intersection of Park Blvd and Imperial Ave three hours prior to show time. No outside will call will be accepted. Customers should bring their confirmation number with a photo I.D. and the credit card used to make the purchase to claim tickets."
                  },
                  "parkingDetail": "Padres preferred parking is available adjacent to Petco Park. Guests are strongly encouraged to pre-purchase their parking to guarantee a spot in these convenient lots. The Lexus Premier Lot, Tailgate Park, and Padres Parkade will open 3 hours prior to the start of the concert.",
                  "accessibleSeatingDetail": "WHEELCHAIR ACCESS: Entire venue is accessible. There are wheelchair and companion seats, armless aisle and transfer seats, please specify your request in your email if you purchase via online. PARKING: Public pay lots with accessible parking CANINE COMPANIONS ACCOMODATED: Yes",
                  "generalInfo": {
                    "generalRule": "Petco Park is a smoke-free facility. Chewing tobacco is prohibited in Petco Park. For cameras. NO video cameras (including GoPro camera), professional still cameras or audio recording devices are allowed in Petco Park for this event. Musical instruments or any type of noise-making device are prohibited from being brought into Petco Park. Any exceptions will be at the discretion and authorization of the San Diego Padres. Umbrellas are not permitted inside the ballpark.",
                    "childRule": "All children regardless of age will need a ticket for this event."
                  },
                  "upcomingEvents": {
                    "ticketmaster": 451,
                    "_total": 451,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/venues/KovZpa4cFe?locale=en-us"
                    }
                  }
                }
              ],
              "attractions": [
                {
                  "name": "P!NK",
                  "type": "attraction",
                  "id": "K8vZ9171Jo7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/pnk-tickets/artist/718655",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/PinkVideoVault"
                      },
                      {
                        "url": "https://www.youtube.com/user/PinkVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/Pink"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/p-nk/4488522"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/P!nk"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Pink_(singer)"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/pink"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "f4d5cc07-3bc9-4836-9b15-88a08359bc63"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/pink/"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.pinkspage.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "p!nk",
                    "pink"
                  ],
                  "images": [
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8cc/0850a9c7-f269-4506-87f5-0acb3e2e08cc_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 2,
                    "mfx-se": 1,
                    "mfx-be": 1,
                    "mfx-nl": 4,
                    "tmr": 2,
                    "ticketmaster": 52,
                    "_total": 62,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9171Jo7?locale=en-us"
                    }
                  }
                },
                {
                  "name": "Sheryl Crow",
                  "type": "attraction",
                  "id": "K8vZ91713kV",
                  "test": false,
                  "url": "https://www.ticketmaster.com/sheryl-crow-tickets/artist/752821",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/channel/UC89Lupwwv9ANeuxfDRXo7mQ"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/SherylCrow"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/sheryl-crow/58757"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/sherylcrow"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/Sheryl_Crow"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/4TKTii6gnOnUXQHyuo9JaD"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://www.instagram.com/SherylCrow"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "80ccfede-c258-4575-a7ad-c982e9932e0f"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.sherylcrow.com/"
                      }
                    ]
                  },
                  "aliases": [
                    "cheryl crow",
                    "sheryl crow",
                    "cheryl crowe",
                    "sheryl crowe"
                  ],
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_SOURCE",
                      "width": 2426,
                      "height": 1617,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/031/e6d62c69-9726-4b41-ad88-6d3f49300031_1093761_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6dt",
                        "name": "Alternative Rock"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "ticketnet": 1,
                    "mfx-es": 2,
                    "tmr": 1,
                    "ticketmaster": 22,
                    "_total": 26,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ91713kV?locale=en-us"
                    }
                  }
                },
                {
                  "name": "The Script",
                  "type": "attraction",
                  "id": "K8vZ917GGs0",
                  "test": false,
                  "url": "https://www.ticketmaster.com/the-script-tickets/artist/1290672",
                  "locale": "en-us",
                  "externalLinks": {
                    "youtube": [
                      {
                        "url": "https://www.youtube.com/user/TheScriptVEVO"
                      }
                    ],
                    "twitter": [
                      {
                        "url": "https://twitter.com/thescript"
                      }
                    ],
                    "itunes": [
                      {
                        "url": "https://music.apple.com/us/artist/the-script/277228393"
                      }
                    ],
                    "lastfm": [
                      {
                        "url": "http://www.last.fm/music/The+Script"
                      }
                    ],
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/thescript"
                      }
                    ],
                    "wiki": [
                      {
                        "url": "https://en.wikipedia.org/wiki/The_Script"
                      }
                    ],
                    "spotify": [
                      {
                        "url": "https://open.spotify.com/artist/3AQRLZ9PuTAozP28Skbq8V"
                      }
                    ],
                    "instagram": [
                      {
                        "url": "https://instagram.com/thescriptofficial"
                      },
                      {
                        "url": "https://instagram.com/thescriptofficial/"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "4c98aa1b-34eb-4336-987f-5e50aa059c00"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://www.thescriptmusic.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/d66/de5c5218-0deb-49f4-807b-958671d29d66_SOURCE",
                      "width": 2426,
                      "height": 1356,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_1524191_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/8ba/24e1114f-c9e4-4173-a8ff-9627c30ee8ba_SOURCE",
                      "width": 2426,
                      "height": 1365,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAeA",
                        "name": "Rock"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7v6F1",
                        "name": "Pop"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7nI",
                        "name": "Undefined"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7v7lJ",
                        "name": "Undefined"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-dk": 1,
                    "mfx-be": 1,
                    "tmr": 2,
                    "ticketmaster": 27,
                    "_total": 31,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ917GGs0?locale=en-us"
                    }
                  }
                },
                {
                  "name": "KidCutUp",
                  "type": "attraction",
                  "id": "K8vZ9178Lb7",
                  "test": false,
                  "url": "https://www.ticketmaster.com/kidcutup-tickets/artist/1797766",
                  "locale": "en-us",
                  "externalLinks": {
                    "facebook": [
                      {
                        "url": "https://www.facebook.com/kidcutup"
                      }
                    ],
                    "musicbrainz": [
                      {
                        "id": "66e92720-60a4-4f73-b263-2e31213b25f8"
                      }
                    ],
                    "homepage": [
                      {
                        "url": "http://kidcutup.com/"
                      }
                    ]
                  },
                  "images": [
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_EVENT_DETAIL_PAGE_16_9.jpg",
                      "width": 205,
                      "height": 115,
                      "fallback": false
                    },
                    {
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_SOURCE",
                      "width": 2426,
                      "height": 2081,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_ARTIST_PAGE_3_2.jpg",
                      "width": 305,
                      "height": 203,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_3_2.jpg",
                      "width": 640,
                      "height": 427,
                      "fallback": false
                    },
                    {
                      "ratio": "4_3",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_CUSTOM.jpg",
                      "width": 305,
                      "height": 225,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RECOMENDATION_16_9.jpg",
                      "width": 100,
                      "height": 56,
                      "fallback": false
                    },
                    {
                      "ratio": "3_2",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_3_2.jpg",
                      "width": 1024,
                      "height": 683,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_LANDSCAPE_16_9.jpg",
                      "width": 1136,
                      "height": 639,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_16_9.jpg",
                      "width": 1024,
                      "height": 576,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_RETINA_PORTRAIT_16_9.jpg",
                      "width": 640,
                      "height": 360,
                      "fallback": false
                    },
                    {
                      "ratio": "16_9",
                      "url": "https://s1.ticketm.net/dam/a/be5/7ffa93cf-5cfb-4421-a117-e5574f4c9be5_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                      "width": 2048,
                      "height": 1152,
                      "fallback": false
                    }
                  ],
                  "classifications": [
                    {
                      "primary": true,
                      "segment": {
                        "id": "KZFzniwnSyZfZ7v7nJ",
                        "name": "Music"
                      },
                      "genre": {
                        "id": "KnvZfZ7vAvF",
                        "name": "Dance/Electronic"
                      },
                      "subGenre": {
                        "id": "KZazBEonSMnZfZ7vA1E",
                        "name": "Dance/Electronic"
                      },
                      "type": {
                        "id": "KZAyXgnZfZ7v7la",
                        "name": "Individual"
                      },
                      "subType": {
                        "id": "KZFzBErXgnZfZ7vAd7",
                        "name": "Musician"
                      },
                      "family": false
                    }
                  ],
                  "upcomingEvents": {
                    "mfx-be": 1,
                    "ticketmaster": 37,
                    "_total": 38,
                    "_filtered": 0
                  },
                  "_links": {
                    "self": {
                      "href": "/discovery/v2/attractions/K8vZ9178Lb7?locale=en-us"
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "_links": {
        "first": {
          "href": "/discovery/v2/events?page=0&size=20"
        },
        "self": {
          "href": "/discovery/v2/events"
        },
        "next": {
          "href": "/discovery/v2/events?page=1&size=20"
        },
        "last": {
          "href": "/discovery/v2/events?page=12841&size=20"
        }
      },
      "page": {
        "size": 20,
        "totalElements": 256837,
        "totalPages": 12842,
        "number": 0
      }
    }
  // constructor() { }
}
