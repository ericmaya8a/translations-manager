const { createTranslationsFile } = require('./messages');

createTranslationsFile({
  searchVinsTitle: {
    id: 'search.vins.title',
    defaultMessage: 'Select vehicle to test'
  },
  searchbarResults: {
    searchbarPlaceholder: {
      id: 'searchbar.placeholder',
      defaultMessage: 'Search for vehicles'
    },
    noRecentSearches: {
      id: 'searchbar.no.recent.searches',
      defaultMessage: 'No recent searches'
    },
    recentSearches: {
      id: 'searchbar.recent.searches',
      defaultMessage: 'Recent Searches'
    },
    noResults: {
      id: 'searchbar.no.results',
      defaultMessage: 'No Results'
    }
  },
  brandLogoTitle: {
    id: 'brand.logo.title',
    defaultMessage: 'Vehicle Test Portal'
  },
  headerLoggedIn: {
    id: 'header.logged.in',
    defaultMessage: 'Logged in as '
  },
  headerIn: {
    id: 'header.in',
    defaultMessage: ' in'
  },
  headerLogoutButton: {
    id: 'header.logout.button',
    defaultMessage: 'Logout'
  },
  textAreaInput: {
    id: 'textarea.input',
    defaultMessage: 'Input'
  },
  textAreaOutput: {
    id: 'textarea.output',
    defaultMessage: 'Output'
  },
  navigationMenu: {
    vehiclesHome: {
      id: 'navigation.menu.vehicles.home',
      defaultMessage: 'Home'
    },
    subscriptions: {
      id: 'navigation.menu.vehicles.subscriptions',
      defaultMessage: 'Subscriptions'
    },
    calls: {
      id: 'navigation.menu.vehicles.calls',
      defaultMessage: 'Calls'
    },
    guardianAlerts: {
      id: 'navigation.menu.guardian.alerts',
      defaultMessage: 'Guardian Alerts'
    },
    remoteServices: {
      id: 'navigation.menu.remote.services',
      defaultMessage: 'Remote Services'
    },
    commandLine: {
      id: 'navigation.menu.command.line',
      defaultMessage: 'Command Line'
    },
    notifications: {
      id: 'navigation.menu.notifications',
      defaultMessage: 'Notifications'
    },
    electricFeatures: {
      id: 'navigation.menu.electric.features',
      defaultMessage: 'Electric Features'
    },
    services: {
      id: 'navigation.menu.services',
      defaultMessage: 'Services'
    },
    logs: {
      id: 'navigation.menu.logs',
      defaultMessage: 'Logs'
    }
  },
  navigationMenuSearchVin: {
    id: 'navigation.menu.search.vin',
    defaultMessage: 'Search New VIN'
  },
  commandLineForm: {
    title: {
      id: 'command.line.form.title',
      defaultMessage: 'Remote Operations'
    },
    send: {
      id: 'command.line.form.send',
      defaultMessage: 'Send'
    },
    placeholder: {
      id: 'command.line.form.placeholder',
      defaultMessage: 'Remote Operations Input...'
    },
    type: {
      payload: {
        id: 'command.line.form.type.payload',
        defaultMessage: 'Payload'
      },
      output: {
        id: 'command.line.form.type.output',
        defaultMessage: 'Output'
      }
    }
  },
  commandLineFormSend: {},
  commandLineFormPlaceholder: {},
  formUserAgent: {
    id: 'form.user.user.agent',
    defaultMessage: 'User Agent'
  },
  formUserAgentOwnerPortal: {
    id: 'form.user.agent.owner.portal',
    defaultMessage: 'Owner Portal'
  },
  formUserAgentAndroid: {
    id: 'form.user.agent.android',
    defaultMessage: 'Android'
  },
  formUserAgentiPhone: {
    id: 'form.user.agent.iphone',
    defaultMessage: 'iPhone'
  },
  formUserAgentCustomerCare: {
    id: 'form.user.customer.care',
    defaultMessage: 'Customer Care'
  },
  formUserAgentHeadUnit: {
    id: 'form.user.head.unit',
    defaultMessage: 'Head Unit'
  },
  formUserAgentAMPServer: {
    id: 'form.user.amp.server',
    defaultMessage: 'AMPServer'
  },
  formUserAgentCANServer: {
    id: 'form.user.can.server',
    defaultMessage: 'CANServer'
  },
  formUserAgentOTAServer: {
    id: 'form.user.ota.server',
    defaultMessage: 'OTAServer'
  },
  formUserAgentATC: {
    id: 'form.user.atc.server',
    defaultMessage: 'ATC'
  },
  formWifiApStatus: {
    id: 'vehicle.remoteOperations.form.formWifiApStatus',
    defaultMessage: 'WiFi access point status'
  },
  formWifiApClientStatus: {
    id: 'vehicle.remoteOperations.form.formWifiApClientStatus',
    defaultMessage: 'WiFi access point client status'
  },
  formWifiApSwitch: {
    id: 'vehicle.remoteOperations.form.formWifiApSwitch',
    defaultMessage: 'Enable WiFi access point'
  },
  formWifiApClientSwitch: {
    id: 'vehicle.remoteOperations.form.formWifiApClientSwitch',
    defaultMessage: 'Enable WiFi access point client'
  },
  formWifiApClientNetworkDiscovery: {
    id: 'vehicle.remoteOperations.form.formWifiApClientNetworkDiscovery',
    defaultMessage: 'Enable client network discovery'
  },
  formWifiFactoryReset: {
    id: 'vehicle.remoteOperations.form.formWifiFactoryReset',
    defaultMessage: 'Reset to factory defaults'
  },
  configurationDataArray: {
    id: 'vehicle.remoteOperations.wifiControl.configurationDataArray',
    defaultMessage: 'Add a configuration entry'
  },
  clientConfigurationDataArray: {
    id: 'vehicle.remoteOperations.wifiControl.clientConfigurationDataArray',
    defaultMessage: 'Add a client configuration entry'
  },
  wifiConfigurationSsid: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSsid',
    defaultMessage: 'SSID'
  },
  wifiConfigurationSecurity: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSecurity',
    defaultMessage: 'WiFi configuration security'
  },
  wifiConfigurationSecurityWep: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSecurityWep',
    defaultMessage: 'WEP'
  },
  wifiConfigurationSecurityWpaTkip: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSecurityWpaTkip',
    defaultMessage: 'WPA (TKIP)'
  },
  wifiConfigurationSecurityWpaAesWithTkipFallback: {
    id:
      'vehicle.remoteOperations.wifi.wifiConfigurationSecurityWpaAesWithTkipFallback',
    defaultMessage: 'WPA (AES with TKIP fallback)'
  },
  wifiConfigurationSecurityWpaAes: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSecurityWpaAes',
    defaultMessage: 'WPA (AES)'
  },
  wifiConfigurationSecurityWpa2Aes: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSecurityWpa2Aes',
    defaultMessage: 'WPA2 (AES)'
  },
  wifiConfigurationPassword: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationPassword',
    defaultMessage: 'Access point password'
  },
  wifiConfigurationConnectAuto: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationConnectAuto',
    defaultMessage: 'Connect automatically'
  },
  wifiConfigurationConnectIfNotBroadcast: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationConnectIfNotBroadcast',
    defaultMessage: 'Connect if SSID is not broadcasted'
  },
  wifiConfigurationPreferenceOrder: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationPreferenceOrder',
    defaultMessage: 'Preference order'
  },
  wifiConfigurationSsidTechnology: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSsidTechnology',
    defaultMessage: 'SSID Technology'
  },
  wifiConfigurationTwoGHz: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationTwoGHz',
    defaultMessage: '2.4 GHz'
  },
  wifiConfigurationFiveGHz: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationFiveGHz',
    defaultMessage: '5.0 GHz'
  },
  wifiConfigurationSsidSwitch: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSsidSwitch',
    defaultMessage: 'Enable SSID'
  },
  wifiConfigurationSsidBroadcast: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSsidBroadcast',
    defaultMessage: 'Broadcast SSID'
  },
  wifiConfigurationMaximumAllowedConnections: {
    id:
      'vehicle.remoteOperations.wifi.wifiConfigurationMaximumAllowedConnections',
    defaultMessage: 'Maximum allowed connections'
  },
  wifiConfigurationParentalControlsSwitch: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationParentalControlsSwitch',
    defaultMessage: 'Enable parental controls'
  },
  wifiConfigurationParentalControlsInput: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationParentalControlsInput',
    defaultMessage: 'Website name'
  },
  wifiConfigurationSsidScheduleSwitch: {
    id: 'vehicle.remoteOperations.wifi.wifiConfigurationSsidScheduleSwitch',
    defaultMessage: 'Activate SSID on a schedule'
  },
  parentalControlsArrayEntry: {
    id: 'vehicle.remoteOperations.wifi.parentalControlsArrayEntry',
    defaultMessage: 'Add a parental control website entry'
  },
  honkFlashServiceDuration: {
    id: 'honk.flash.service.duration',
    defaultMessage: 'Service Duration'
  },
  honkFlashLightFlashControl: {
    id: 'honk.flash.light.flash.control',
    defaultMessage: 'Light Flash Control'
  },
  honkFlashLightType: {
    id: 'honk.flash.light.type',
    defaultMessage: 'Light Type'
  },
  honkFlashHornControl: {
    id: 'honk.flash.horn.control',
    defaultMessage: 'Horn Control'
  },
  honkFlashHeadLights: {
    id: 'honk.flash.head.lights',
    defaultMessage: 'Head Lights'
  },
  honkFlashParkingLights: {
    id: 'honk.flash.parking.lights',
    defaultMessage: 'Parking Lights'
  },
  honkFlashTailLights: {
    id: 'honk.flash.tail.lights',
    defaultMessage: 'Tail Lights'
  },
  honkFlashRightSideLights: {
    id: 'honk.flash.right.side.lights',
    defaultMessage: 'Right Side Lights'
  },
  honkFlashLeftSideLights: {
    id: 'honk.flash.left.side.lights',
    defaultMessage: 'Left Side Lights'
  },
  honkFlashInteriorLights: {
    id: 'honk.flash.interior.lights',
    defaultMessage: 'Interior Lights'
  },
  honkFlashMessage: {
    id: 'honk.flash.message',
    defaultMessage:
      'Location in this application context means that the service is initiated only when the user is within an allowed distance.'
  },
  vehicleStatus: {
    typeColumn: {
      id: 'vehicle.status.table.type.column',
      defaultMessage: 'Type'
    },
    vehicleStatusType: {
      id: 'vehicle.status.table.vehicleStatusType',
      defaultMessage: 'Vehicle Status'
    },
    timestampColumn: {
      id: 'vehicle.status.table.timestamp.column',
      defaultMessage: 'Timestamp'
    },
    payloadColumn: {
      id: 'vehicle.status.table.payload.column',
      defaultMessage: 'Payload'
    }
  },
  honkFlashCoordinates: {
    id: 'honk-flash-coordinates',
    defaultMessage: 'Latitude / Longitude'
  },
  vehicleStatusIncludeStatusReport: {
    id: 'vehicle.status.include.health.report',
    defaultMessage: 'Include Status Report'
  },
  vehicleStatusIncludeVehicle: {
    id: 'vehicle.status.include.vehicle',
    defaultMessage: 'Include Vehicle Status elements ONLY'
  },
  vehicleStatusIncludeMandatory: {
    id: 'vehicle.status.include.mandatory.vehicle',
    defaultMessage: 'Include Mandatory Vehicle Status elements ONLY'
  },
  vehicleHealthIncludeHealthReport: {
    id: 'vehicle.health.include.health.report',
    defaultMessage: 'Vehicle Health Report'
  },
  vehicleHealthIncludeHealthMandatory: {
    id: 'vehicle.health.include.health.mandatory',
    defaultMessage: 'Health Report with Mandatory Vehicle Status elements'
  },
  vehicleHealthIncludeHealthOnly: {
    id: 'vehicle.health.include.health.only',
    defaultMessage: 'Health Report ONLY'
  },
  geoFenceFieldsAction: {
    id: 'geo.fence.action',
    defaultMessage: 'Geofence Action'
  },
  geoFenceFieldsActionCreate: {
    id: 'geo.fence.action.create',
    defaultMessage: 'Create'
  },
  geoFenceFieldsActionDelete: {
    id: 'geo.fence.action.delete',
    defaultMessage: 'Delete'
  },
  geoFenceFieldsId: {
    id: 'geo.fence.id',
    defaultMessage: 'Geofence Id'
  },
  geoFenceFieldsIdHint: {
    id: 'geo.fence.id.hint',
    defaultMessage: '*Valid options for ID are 1-4'
  },
  geoFenceFieldsName: {
    id: 'geo.fence.name',
    defaultMessage: 'Geofence Name'
  },
  scheduleUTCTime: {
    id: 'schedule.utc.time',
    defaultMessage: 'Start / End UTC Time'
  },
  scheduleServiceScheduleType: {
    id: 'schedule.service.schedule.type',
    defaultMessage: 'Service Schedule Type'
  },
  scheduleSimple: {
    id: 'schedule.simple',
    defaultMessage: 'Simple'
  },
  scheduleWeekly: {
    id: 'schedule.weekly',
    defaultMessage: 'Weekly'
  },
  scheduleDaily: {
    id: 'schedule.daily',
    defaultMessage: 'Daily'
  },
  compoundContext: {
    id: 'compoundContext',
    defaultMessage: 'Compound Context'
  },
  recurringReports: {
    id: 'recurring.reports',
    defaultMessage: 'Recurring Reports'
  },
  recurringReportsRange0: {
    id: 'recurring.reports.range0',
    defaultMessage: '0'
  },
  recurringReportsRange29: {
    id: 'recurring.reports.range29',
    defaultMessage: '1-29'
  },
  recurringReportsRange600: {
    id: 'recurring.reports.range600',
    defaultMessage: '30-600'
  },
  recurringReportsActive: {
    id: 'active.recurring.reports',
    defaultMessage: 'Number of recurring reports'
  },
  coordinates: {
    id: 'coordinates',
    defaultMessage: 'Coordinates'
  },
  serviceSchedule: {
    id: 'service.schedule',
    defaultMessage: 'Start / End UTC Time'
  },
  scheduleStartEndTime: {
    id: 'schedule.start.end.time.day',
    defaultMessage: 'Start / End Time of Day'
  },
  scheduleWarning: {
    id: 'schedule.star.end.time.warning',
    defaultMessage: '* Your end time must be greater than your start time'
  },
  scheduleConsiderUTCOffset: {
    id: 'schedule.consider.utc.offset',
    defaultMessage: 'Consider UTC Offset'
  },
  scheduleUTCOffset: {
    id: 'schedule.UTC.Offset',
    defaultMessage: 'UTC Offset'
  },
  scheduleDayInterval: {
    id: 'schedule.day.interval',
    defaultMessage: 'Day Interval'
  },
  scheduleEveryday: {
    id: 'schedule.day.everyday',
    defaultMessage: 'Every day'
  },
  scheduleEveryOtherDay: {
    id: 'schedule.day.other.day',
    defaultMessage: 'Every other day'
  },
  scheduleEveryThirdDay: {
    id: 'schedule.day.third.day',
    defaultMessage: 'Every third day'
  },
  scheduleEveryMonday: {
    id: 'schedule.every.monday',
    defaultMessage: 'Every Monday'
  },
  scheduleEveryTuesday: {
    id: 'schedule.every.tuesday',
    defaultMessage: 'Every Tuesday'
  },
  scheduleEveryWednesday: {
    id: 'schedule.every.wednesday',
    defaultMessage: 'Every Wednesday'
  },
  scheduleEveryThursday: {
    id: 'schedule.every.thursday',
    defaultMessage: 'Every Thursday'
  },
  scheduleEveryFriday: {
    id: 'schedule.every.friday',
    defaultMessage: 'Every Friday'
  },
  scheduleEverySaturday: {
    id: 'schedule.every.saturday',
    defaultMessage: 'Every Saturday'
  },
  scheduleEverySunday: {
    id: 'schedule.every.sunday',
    defaultMessage: 'Every Sunday'
  },
  scheduleEveryWeek: {
    id: 'schedule.every.week',
    defaultMessage: 'Every week'
  },
  scheduleEveryOtherWeek: {
    id: 'schedule.every.other.week',
    defaultMessage: 'Every other week'
  },
  scheduleEveryThirdWeek: {
    id: 'schedule.every.third.week',
    defaultMessage: 'Every third week'
  },
  scheduleWeekInterval: {
    id: 'schedule.week.interval',
    defaultMessage: 'Week Interval'
  },
  areaDefinitionAreaType: {
    id: 'area.definition.area.type',
    defaultMessage: 'Area Type'
  },
  areaDefinitionCircle: {
    id: 'area.definition.circle',
    defaultMessage: 'Circle'
  },
  areaDefinitionEllipse: {
    id: 'area.definition.ellipse',
    defaultMessage: 'Ellipse'
  },
  areaDefinitionRectangle: {
    id: 'area.definition.rectangle',
    defaultMessage: 'Rectangle'
  },
  areaDefinitionPolygon: {
    id: 'area.definition.Polygon',
    defaultMessage: 'Polygon'
  },
  areaDefinitionAreaId: {
    id: 'area.definition.area.id',
    defaultMessage: 'Area ID'
  },
  areaDefinitionAreaRotationAngle: {
    id: 'area.definition.area.rotation.angle',
    defaultMessage: 'Area Rotation Angle'
  },
  areaDefinitionAreaZoneReportType: {
    id: 'area.definition.area.zone.report.type',
    defaultMessage: 'Area Zone Report Type'
  },
  secondAreaZoneReportType: {
    id: 'second.area.zone.report.type',
    defaultMessage: 'Second Area Zone Report Type'
  },
  areaDefinitionZoneTypeGreenZone: {
    id: 'area.definition.zone.type.green.zone',
    defaultMessage: 'Green Zone'
  },
  areaDefinitionZoneTypeRedZone: {
    id: 'area.definition.zone.type.red.zone',
    defaultMessage: 'Red Zone'
  },
  areaDefinitionZoneTypeBoth: {
    id: 'area.definition.zone.type.both',
    defaultMessage: 'Both'
  },
  areaDefinitionFirstDimension: {
    id: 'area.definition.first.dimension',
    defaultMessage: 'First Dimension'
  },
  areaDefinitionSecondDimension: {
    id: 'area.definition.second.dimension',
    defaultMessage: 'Second Dimension'
  },
  speedAlertAction: {
    id: 'speed.alert.action',
    defaultMessage: 'Speed Alert Action'
  },
  speedAlertActionCreate: {
    id: 'speed.alert.action.create',
    defaultMessage: 'Create'
  },
  speedAlertActionDelete: {
    id: 'speed.alert.action.delete',
    defaultMessage: 'Delete'
  },
  speedAlertId: {
    id: 'speed.alert.id',
    defaultMessage: 'Speed Alert ID'
  },
  speedAlertId1: {
    id: 'speed.alert.id.1',
    defaultMessage: '1'
  },
  speedAlertId2: {
    id: 'speed.alert.id.2',
    defaultMessage: '2'
  },
  speedAlertId3: {
    id: 'speed.alert.id.3',
    defaultMessage: '3'
  },
  speedAlertName: {
    id: 'speed.alert.name',
    defaultMessage: 'Speed Alert Name'
  },
  speedThreshold: {
    id: 'speed.alert.threshold',
    defaultMessage: 'Speed Threshold'
  },
  valetAlertAction: {
    id: 'valet.alert.action',
    defaultMessage: 'Valet Alert Action'
  },
  valetAlertActionCreate: {
    id: 'valet.alert.create',
    defaultMessage: 'Create'
  },
  valetAlertActionDelete: {
    id: 'valet.alert.delete',
    defaultMessage: 'Delete'
  },
  svaTracking: {
    id: 'sva.tracking',
    defaultMessage: 'SVA Tracking'
  },
  svaTrackingOn: {
    id: 'sva.tracking.on',
    defaultMessage: 'On'
  },
  svaTrackingOff: {
    id: 'sva.tracking.off',
    defaultMessage: 'Off'
  },
  svaTrackingSinglePosition: {
    id: 'sva.tracking.single.position',
    defaultMessage: 'SVA Tracking Single Position'
  },
  svaTrackingSinglePositionOn: {
    id: 'sva.tracking.single.position.on',
    defaultMessage: 'On'
  },
  svaTrackingSinglePositionOff: {
    id: 'sva.tracking.single.position.off',
    defaultMessage: 'Off'
  },
  svaTrackingTime: {
    id: 'sva.tracking.time',
    defaultMessage: 'SVA Tracking Time'
  },
  svaTrackingDistance: {
    id: 'sva.tracking.distance',
    defaultMessage: 'SVA Tracking Distance'
  },
  svaTrackingBreadcrumbs: {
    id: 'sva.tracking.breadcrumbs',
    defaultMessage: 'SVA Tracking Breadcrumbs'
  },
  svaDisableStartAfterStop: {
    id: 'sva.disable.star.after.stop',
    defaultMessage: 'SVA Disable Start After Stop'
  },
  svaDisableStartAfterStopOff: {
    id: 'sva.disable.star.after.off',
    defaultMessage: 'Off'
  },
  svaDisableStartAfterStopOn: {
    id: 'sva.disable.star.after.on',
    defaultMessage: 'On'
  },
  svaSlowdown: {
    id: 'sva.slowdown',
    defaultMessage: 'SVA Slowdown'
  },
  svaSlowdownOn: {
    id: 'sva.slowdown.on',
    defaultMessage: 'On'
  },
  svaSlowdownOff: {
    id: 'sva.slowdown.off',
    defaultMessage: 'Off'
  },
  svaSeatBeltBuzzer: {
    id: 'sva.seat.belt.buzzer',
    defaultMessage: 'SVA Seat Belt Buzzer'
  },
  svaSeatBeltBuzzerOff: {
    id: 'sva.seat.belt.buzzer.off',
    defaultMessage: 'Off'
  },
  svaSeatBeltBuzzerOn: {
    id: 'sva.seat.belt.buzzer.on',
    defaultMessage: 'On'
  },
  svaRadio: {
    id: 'sva.radio',
    defaultMessage: 'SVA Radio'
  },
  svaRadioOff: {
    id: 'sva.radio.off',
    defaultMessage: 'Off'
  },
  svaRadioOn: {
    id: 'sva.radio.on',
    defaultMessage: 'On'
  },
  svaHeat: {
    id: 'sva.heat',
    defaultMessage: 'SVA Heat'
  },
  svaHeatOn: {
    id: 'sva.heat.on',
    defaultMessage: 'On'
  },
  svaHeatOff: {
    id: 'sva.heat.off',
    defaultMessage: 'Off'
  },
  svaDoorLock: {
    id: 'sva.door.lock',
    defaultMessage: 'SVA Door Lock'
  },
  svaDoorLockOff: {
    id: 'sva.door.lock.off',
    defaultMessage: 'Off'
  },
  svaDoorLockOn: {
    id: 'sva.door.lock.on',
    defaultMessage: 'On'
  },
  svaHorn: {
    id: 'sva.horn',
    defaultMessage: 'SVA Horn'
  },
  svaHornOff: {
    id: 'sva.horn.off',
    defaultMessage: 'Off'
  },
  svaHornOn: {
    id: 'sva.horn.on',
    defaultMessage: 'On'
  },
  svaWiper: {
    id: 'sva.wiper',
    defaultMessage: 'SVA Wiper'
  },
  svaWiperOff: {
    id: 'sva.wipe.off',
    defaultMessage: 'Off'
  },
  svaWiperOn: {
    id: 'sva.wiper.on',
    defaultMessage: 'On'
  },
  svaHazardFlash: {
    id: 'sva.hazard.flash',
    defaultMessage: 'SVA Hazard Flash'
  },
  svaHazardFlashOff: {
    id: 'sva.hazard.flash.off',
    defaultMessage: 'Off'
  },
  svaHazardFlashOn: {
    id: 'sva.hazard.flash.on',
    defaultMessage: 'On'
  },
  tripId: {
    id: 'poi.trip.id',
    defaultMessage: 'Trip ID'
  },
  tripName: {
    id: 'poi.trip.name',
    defaultMessage: 'Trip Name'
  },
  tripType: {
    id: 'poi.trip.type',
    defaultMessage: 'Trip Type'
  },
  waypointId: {
    id: 'poi.trip.waypoint.id',
    defaultMessage: 'Waypoint ID'
  },
  storeThisTripForLaterUse: {
    id: 'store.this.trip.for.later.use',
    defaultMessage: 'Store this trip for later use'
  },
  storeThisTripAndUse: {
    id: 'store.this.trip.and.use',
    defaultMessage:
      'Store this trip for later use, and use this trip as an immediate destination'
  },
  doNotstoreThisTripAndUse: {
    id: 'do.not.store.this.trip',
    defaultMessage:
      'Do not store this trip for later use, but use it as an immediate destination'
  },
  retainTripAfterLaterUse: {
    id: 'retain.trip.after.later.use',
    defaultMessage: 'Retain trip after later use'
  },
  destinationCategoryResultsCode: {
    id: 'destination.category.results.code',
    defaultMessage: 'Results Code'
  },
  destinationCategoryRestaurant: {
    id: 'destination.category.restaurant',
    defaultMessage: 'Restaurant'
  },
  destinationCategorySport: {
    id: 'destination.category.sport',
    defaultMessage: 'Sport'
  },
  destinationCategoryShopping: {
    id: 'destination.category.shopping',
    defaultMessage: 'Shopping'
  },
  destinationCategoryBusiness: {
    id: 'destination.category.Business',
    defaultMessage: 'Business'
  },
  destinationCategoryRecreation: {
    id: 'destination.category.recreation',
    defaultMessage: 'Recreation'
  },
  destinationCategorySightseeing: {
    id: 'destination.category.sightseeing',
    defaultMessage: 'Sightseeing'
  },
  destinationCategoryEducation: {
    id: 'destination.category.education',
    defaultMessage: 'Education'
  },
  destinationCategoryMuseum: {
    id: 'destination.category.Museum',
    defaultMessage: 'Museum'
  },
  destinationCategoryMedical: {
    id: 'destination.category.medical',
    defaultMessage: 'Medical'
  },
  destinationCategoryInfrastructure: {
    id: 'destination.category.infrastructure',
    defaultMessage: 'Infrastructure'
  },
  destinationCategoryPrivate: {
    id: 'destination.category.private',
    defaultMessage: 'Private'
  },
  destinationCategoryMiscellaneous: {
    id: 'destination.category.miscellaneous',
    defaultMessage: 'Miscellaneous'
  },
  destinationCategoryNoCategory: {
    id: 'destination.category.nocategory',
    defaultMessage: 'No Category'
  },
  destinationCategoryVehicle: {
    id: 'destination.category.vehicle',
    defaultMessage: 'Vehicle'
  },
  poiCountry: {
    id: 'poi.country',
    defaultMessage: 'Country'
  },
  poiCity: {
    id: 'poi.city',
    defaultMessage: 'City'
  },
  poiRegion: {
    id: 'poi.region',
    defaultMessage: 'Region'
  },
  poiStreetName: {
    id: 'poi.street.name',
    defaultMessage: 'Street Name'
  },
  poiStreetNumber: {
    id: 'poi.street.number',
    defaultMessage: 'Street Number'
  },
  poiPostalCode: {
    id: 'poi.postal.code',
    defaultMessage: 'Postal Code'
  },
  poiTelephone: {
    id: 'poi.telephone',
    defaultMessage: 'Telephone'
  },
  poiEmail: {
    id: 'poi.email',
    defaultMessage: 'Email'
  },
  poiWebsite: {
    id: 'poi.website',
    defaultMessage: 'Website'
  },
  dataCollectionType: {
    id: 'data.collection.type',
    defaultMessage: 'Data Collection Type'
  },
  dataCollectionUseStoreValues: {
    id: 'data.collection.use.store.values',
    defaultMessage: 'Use stored values'
  },
  dataCollectionWakeUp: {
    id: 'data.collection.wake.up',
    defaultMessage: 'Wake up or wait until vehicle has fresh values'
  },
  callCenterOperation: {
    id: 'operation',
    defaultMessage: 'Operation'
  },
  callCenterbCall: {
    id: 'call.center.bcall',
    defaultMessage: 'bCall'
  },
  callCenteriCall: {
    id: 'call.center.icall',
    defaultMessage: 'iCall'
  },
  callCentereCall: {
    id: 'call.center.ecall',
    defaultMessage: 'eCall'
  },
  callCenterServicesData: {
    id: 'call.center.services',
    defaultMessage: 'Call Center Services'
  },
  callCenterServicesUseExistingData: {
    id: 'call.center.use.existing.data',
    defaultMessage: 'Use existing data and transmit'
  },
  callCenterServicesObtain: {
    id: 'call.center.obtain',
    defaultMessage: 'Obtain as much new data as possible and transmit'
  },
  climateControlEngineControlType: {
    id: 'climate.control.engine.control.type',
    defaultMessage: 'Engine Control Type'
  },
  climateControlEngineControlDelay: {
    id: 'climate.control.engine.control.delay',
    defaultMessage: 'Engine Control Delay'
  },
  climateControlEngineControlTypeStop: {
    id: 'climate.control.engine.control.type.off',
    defaultMessage: 'Off'
  },
  climateControlEngineControlTypeStart: {
    id: 'climate.control.engine.control.type.on',
    defaultMessage: 'On'
  },
  climateControlServiceDurationCc: {
    id: 'climate.control.engine.service.duration',
    defaultMessage: 'Service Duration'
  },
  climateControlLeftSideTemperature: {
    id: 'climate.control.left.side.temperature',
    defaultMessage: 'Left Side Temperature'
  },
  climateControlRightSideTemperature: {
    id: 'climate.control.right.side.temperature',
    defaultMessage: 'Right Side Temperature'
  },
  climateControlMiddleTemperature: {
    id: 'climate.control.middle.temperature',
    defaultMessage: 'Middle Temperature'
  },
  climateControlRearTemperature: {
    id: 'climate.control.rear.temperature',
    defaultMessage: 'Rear Temperature'
  },
  climateControlFrontDefrostDefog: {
    id: 'climate.control.front.defrostDefog',
    defaultMessage: 'Front Defroster/Defogger '
  },
  climateControlFrontDefrostDefogOff: {
    id: 'climate.control.front.defrostDefog.off',
    defaultMessage: 'Off'
  },
  climateControlFrontDefrostDefogOn: {
    id: 'climate.control.front.defrostDefog.on',
    defaultMessage: 'On'
  },
  climateControlRearDefrostDefrog: {
    id: 'climate.control.rear.defrostDefog',
    defaultMessage: 'Rear Defroster/Defogger'
  },
  climateControlRearDefrostDefrogOff: {
    id: 'climate.control.rear.defrostDefog.off',
    defaultMessage: 'Off'
  },
  climateControlRearDefrostDefrogOn: {
    id: 'climate.control.rear.defrostDefog.on',
    defaultMessage: 'On'
  },
  climateControlFrontAirDirection: {
    id: 'climate.control.front.air.direction',
    defaultMessage: 'Frontal Air Direction'
  },
  climateControlFrontAirDirectionFeet: {
    id: 'climate.control.front.air.direction.feet',
    defaultMessage: 'Feet'
  },
  climateControlFrontAirDirectionFace: {
    id: 'climate.control.front.air.direction.face',
    defaultMessage: 'Face'
  },
  climateControlFrontAirDirectionDefrost: {
    id: 'climate.control.front.air.direction.defrost',
    defaultMessage: 'Defrost'
  },
  climateControlFrontAirDirectionFeetFace: {
    id: 'climate.control.front.air.direction.feetFace',
    defaultMessage: 'Feet/Face'
  },
  climateControlFrontAirDirectionFeetDefrost: {
    id: 'climate.control.front.air.direction.feetDefrost',
    defaultMessage: 'Feet/Defrost'
  },
  climateControlFrontAirDirectionFaceDefrost: {
    id: 'climate.control.front.air.direction.faceDefrost',
    defaultMessage: 'Face/Defrost'
  },
  climateControlFrontAirDirectionFeetFaceDefrost: {
    id: 'climate.control.front.air.direction.feetFaceDefrost',
    defaultMessage: 'Feet/Face/Defrost'
  },
  climateControlFrontFanSpeed: {
    id: 'climate.control.frontFan.speed',
    defaultMessage: 'Front Fan Speed'
  },
  climateControlMiddleFanSpeed: {
    id: 'climate.control.middleFan.speed',
    defaultMessage: 'Middle Fan Speed'
  },
  climateControlRearFanSpeed: {
    id: 'climate.control.rearFan.speed',
    defaultMessage: 'Rear Fan Speed'
  },
  climateControlOutsideMirrorDefrostDefog: {
    id: 'climate.control.outsideMirror.defrost',
    defaultMessage: 'Outside Mirror Defrost/Defogger'
  },
  climateControlOutsideMirrorDefrostDefogOff: {
    id: 'climate.control.outsideMirror.defrost.off',
    defaultMessage: 'Off'
  },
  climateControlOutsideMirrorDefrostDefogOn: {
    id: 'climate.control.outsideMirror.defrost.on',
    defaultMessage: 'On'
  },
  climateControlLeftSeatWarmer: {
    id: 'climate.control.leftSeat.warmer',
    defaultMessage: 'Left Seat Warmer'
  },
  climateControlLeftSeatWarmerOff: {
    id: 'climate.control.leftSeat.warmer.off',
    defaultMessage: 'Off'
  },
  climateControlLeftSeatWarmerOn: {
    id: 'climate.control.leftSeat.warmer.on',
    defaultMessage: 'On'
  },
  climateControlRightSeatWarmer: {
    id: 'climate.control.rightSeat.warmer',
    defaultMessage: 'Right Seat Warmer'
  },
  climateControlRightSeatWarmerOff: {
    id: 'climate.control.rightSeat.warmer.off',
    defaultMessage: 'Off'
  },
  climateControlRightSeatWarmerOn: {
    id: 'climate.control.rightSeat.warmer.on',
    defaultMessage: 'On'
  },
  doorTrunkControl: {
    id: 'door.trunk.control',
    defaultMessage: 'Door Trunk Control'
  },
  doorTrunkId: {
    id: 'door.trunk.id',
    defaultMessage: 'Door Trunk ID'
  },
  doorTrunkIdAllDoors: {
    id: 'door.trunk.id.all.doors',
    defaultMessage: 'All Doors'
  },
  doorTrunkIdDriverDoorOnly: {
    id: 'door.trunk.id.driver.door.only',
    defaultMessage: 'Driver Door Only'
  },
  doorTrunkIdTrunkOnly: {
    id: 'door.trunk.only',
    defaultMessage: 'Trunk Only'
  },
  doorTrunkIdAllDoorTrunk: {
    id: 'door.trunk.all.door.trunk',
    defaultMessage: 'All Doors and Trunk'
  },
  doorTrunkIdOnlyDriverDoor: {
    id: 'door.trunk.driver.door.only.and.trunk',
    defaultMessage: 'Driver Door Only and Trunk'
  },
  doorTrunkDelay: {
    id: 'door.trunk.delay',
    defaultMessage: 'Door Trunk Delay'
  },
  doorOpenControlSchema: {
    id: 'door.open.control.schema',
    defaultMessage: 'Door Open Control'
  },
  doorTrunkControlUnlock: {
    id: 'door.trunk.control.unlock',
    defaultMessage: 'Unlock'
  },
  doorTrunkControlLock: {
    id: 'door.trunk.control.lock',
    defaultMessage: 'Lock'
  },
  doorOpenControlUnlockClosed: {
    id: 'door.open.control.unlock.closed',
    defaultMessage: 'Unlock and Leave Closed'
  },
  doorOpenControlUnlockOpen: {
    id: 'door.open.control.unlock.open',
    defaultMessage: 'Unlock and Open'
  },
  relockControlDoNot: {
    id: 'relock.control.do.not',
    defaultMessage: 'Do Not Relock After Timeout'
  },
  relockControlDo: {
    id: 'relock.control.do',
    defaultMessage: 'Do Relock After Timeout'
  },
  authenticationChallenge: {
    id: 'authentication.challenge',
    defaultMessage: 'Authentication Challenge'
  },
  authenticationPayload: {
    id: 'authentication.payload',
    defaultMessage: 'Authentication Payload'
  },
  authenticationHash: {
    id: 'authenticationHash',
    defaultMessage: 'Authentication Hash'
  },
  trunkOpenControlSchema: {
    id: 'door.trunk.open.control',
    defaultMessage: 'Trunk Open Control'
  },
  relockControl: {
    id: 'door.trunk.relock.control',
    defaultMessage: 'Relock Control'
  },
  relockControlTime: {
    id: 'door.trunk.relock.control.time',
    defaultMessage: 'Relock Control Time'
  },
  callCenterPhoneNumber: {
    id: 'bcall.call.center.phone.number',
    defaultMessage: 'Call Center Phone Number'
  },
  iCallCenterPhoneNumber: {
    id: 'icall.call.center.phone.number',
    defaultMessage: 'Call Center Phone Number'
  },
  callCenterName: {
    id: 'bcall.call.center.name',
    defaultMessage: 'Call Center Name'
  },
  iCallCenterName: {
    id: 'icall.call.center.name',
    defaultMessage: 'Call Center Name'
  },
  callCenterDescription: {
    id: 'bcall.call.center.description',
    defaultMessage: 'Call Center Description'
  },
  iCallCenterDescription: {
    id: 'icall.call.center.description',
    defaultMessage: 'Call Center Description'
  },
  callCenterLogoUrl: {
    id: 'bcall.call.center.logo.url',
    defaultMessage: 'Call Center Logo Url'
  },
  iCallCenterLogoUrl: {
    id: 'icall.call.center.logo.url',
    defaultMessage: 'Call Center Logo Url'
  },
  resultCode: {
    id: 'bcall.results.code',
    defaultMessage: 'Results Code'
  },
  iCallresultCode: {
    id: 'icall.results.code',
    defaultMessage: 'Results Code'
  },
  resultCodeSuccess: {
    id: 'bcall.results.code.success',
    defaultMessage: 'Success'
  },
  iCallresultCodeSuccess: {
    id: 'icall.results.code.success',
    defaultMessage: 'Success'
  },
  resultCodeTimeout: {
    id: 'bcall.results.code.timeout',
    defaultMessage: 'Timeout'
  },
  iCallresultCodeTimeout: {
    id: 'icall.results.code.timeout',
    defaultMessage: 'Timeout'
  },
  resultCodeInvalidRequest: {
    id: 'bcall.results.code.invalid.request',
    defaultMessage: 'Invalid Request'
  },
  iCallresultCodeInvalidRequest: {
    id: 'icall.results.code.invalid.request',
    defaultMessage: 'Invalid Request'
  },
  iCallresultCodeUnauthorized: {
    id: 'icall.results.code.unauthorized',
    defaultMessage: 'Unauthorized'
  },
  iCallresultCodeServerError: {
    id: 'icall.results.code.server.error',
    defaultMessage: 'Server Error'
  },
  remoteAccess: {
    remoteOperations: {
      id: 'remote.access.remote.operations',
      defaultMessage: 'Remote Operations'
    },
    honkFlash: {
      id: 'remote.access.remote.operations.honk-flash',
      defaultMessage: 'Honk / Flash'
    },
    vehicleStatus: {
      id: 'remote.access.remote.operations.vehicle-status',
      defaultMessage: 'Vehicle Status'
    },
    vehicleHealth: {
      id: 'remote.access.remote.operations.vehicle-health',
      defaultMessage: 'Vehicle Health'
    },
    boundaryAlert: {
      id: 'remote.access.remote.operations.boundary-alert',
      defaultMessage: 'Geofence Alert'
    },
    speedAlert: {
      id: 'remote.access.remote.operations.speed-alert',
      defaultMessage: 'Speed Alert'
    },
    valetAlert: {
      id: 'remote.access.remote.operations.valet-alert',
      defaultMessage: 'Valet Alert'
    },
    curfewAlert: {
      id: 'remote.access.remote.operations.curfew-alert',
      defaultMessage: 'Curfew Alert'
    },
    doorTrunkAlert: {
      id: 'remote.access.remote.operations.doortrunk-alert',
      defaultMessage: 'Door / Trunk'
    },
    iCall: {
      id: 'remote.access.remote.operations.icall',
      defaultMessage: 'iCall'
    },
    bCall: {
      id: 'remote.access.remote.operations.bcall',
      defaultMessage: 'bCall'
    },
    sva: {
      id: 'remote.access.remote.operations.sva',
      defaultMessage: 'Stolen Vehicle Assistance'
    },
    poi: {
      id: 'remote.access.remote.operations.poi',
      defaultMessage: 'POI Download'
    },
    vehicleMaintenance: {
      id: 'remote.access.remote.operations.vehicleMaintenance',
      defaultMessage: 'Vehicle Maintenance'
    },
    callCenter: {
      id: 'remote.access.remote.operations.callCenter',
      defaultMessage: 'Call Center'
    },
    noVehicleSelect: {
      id: 'remote.access.novehicle.select',
      defaultMessage: 'You need to select a Vehicle to send alerts'
    },
    noVehicleSelectCallToAction: {
      id: 'remote.access.novehicle.calltoaction',
      defaultMessage: 'Click here to search for one'
    }
  },
  vehicleNotFoundToasterError: {
    id: 'vehicle.toaster.error',
    defaultMessage: 'Vehicle not found'
  },
  tcu: {
    error400: {
      id: 'tcu.error.400.bad.request',
      defaultMessage: 'Bad request, ensure all parameters are sent'
    },
    error401: {
      id: 'tcu.error.401.unauthorized',
      defaultMessage: 'Not authorized, please contact the administrator'
    },
    error403: {
      id: 'tcu.error.403.forbidden',
      defaultMessage: 'Resource forbidden, please contact the administrator'
    },
    error404: {
      id: 'tcu.404.not.found',
      defaultMessage: 'API not found, please contact the administrator'
    },
    error500: {
      id: 'tcu.500.mts.server.error',
      defaultMessage: 'MTS Server error, please try again later'
    }
  },
  remoteAccessToasterError404: {
    id: 'remote.access.toaster.error.404',
    defaultMessage: 'Server was not found'
  },
  remoteAccessToasterError500: {
    id: 'remote.access.toaster.error.500',
    defaultMessage: 'Try again later'
  },
  remoteAccessToasterError100002: {
    id: 'remote.access.toaster.error.100002',
    defaultMessage: 'Make sure the form is completed and try again'
  },
  remoteAccessToasterError100003: {
    id: 'remote.access.toaster.error.100003',
    defaultMessage:
      'Invalid Payload. Make sure the form is filled out correctly and try again.'
  },
  remoteAccessToasterError100005: {
    id: 'remote.access.toaster.error.100005',
    defaultMessage: 'Invalid Token'
  },
  remoteAccessToasterError100006: {
    id: 'remote.access.toaster.error.100006',
    defaultMessage: 'Invalid Username'
  },
  remoteAccessToasterError100007: {
    id: 'remote.access.toaster.error.100007',
    defaultMessage: 'Vehicle not found'
  },
  remoteAccessToasterErrorUnknown: {
    id: 'remote.access.toaster.error.unknown',
    defaultMessage: 'Unknown Error'
  },
  remoteAccessToasterRefreshingToken: {
    id: 'remote.access.toaster.error.refresh',
    defaultMessage: 'Refreshing Access Token'
  },
  remoteAccessToasterNoCoordinates: {
    id: 'remote.access.toaster.no.coordinates',
    defaultMessage: 'Vehicle location not found'
  },
  remoteAccessToasterAuthFailed: {
    id: 'remote.access.toaster.auth.failed',
    defaultMessage: 'Authentication Failed'
  },
  remoteAccessSearchingVehicle: {
    id: 'remote.access.searching.vehicle',
    defaultMessage: 'Searching for vehicle'
  },
  locationServicesLegend: {
    id: 'location.services.legend',
    defaultMessage: 'Guardian Alerts'
  },
  locationServicesValetAlerts: {
    id: 'location.services.alerts.valet',
    defaultMessage: 'Valet Alerts'
  },
  locationServicesGeofenceAlerts: {
    id: 'location.services.alerts.geofence',
    defaultMessage: 'Geofence Alerts'
  },
  locationServicesGeofenceAlertsType: {
    id: 'location.services.alerts.geofence.type',
    defaultMessage: 'Geofence'
  },
  locationServicesSpeedAlerts: {
    id: 'location.services.alerts.speed',
    defaultMessage: 'Speed Alerts'
  },
  locationServicesCurfewAlerts: {
    id: 'location.services.alerts.curfew',
    defaultMessage: 'Curfew'
  },
  speedAlertsNoSpeedAlerts: {
    id: 'location.services.alerts.speed.nospeedalerts',
    defaultMessage: 'This vehicle has no speed alerts'
  },
  speedAlertsNoSpeedAlertsCallToAction: {
    id: 'location.services.alerts.speed.nospeedalerts.calltoaction',
    defaultMessage: 'Click here to go create some'
  },
  speedAlertsCreateButton: {
    id: 'location.services.alerts.speed.createspeedalert',
    defaultMessage: 'Create speed alert'
  },
  speedAlertsCancelButton: {
    id: 'location.services.alerts.speed.cancelspeedalert',
    defaultMessage: 'Cancel'
  },
  speedAlertsErrorTitle: {
    id: 'location.services.alerts.speed.errorTitle',
    defaultMessage: 'An error ocurred'
  },
  speedAlertsErrorMessage: {
    id: 'location.services.alerts.speed.errorMessage',
    defaultMessage:
      'There was an error loading your speed alerts. If this problem persists please contact your administrator.'
  },
  speedAlertsErrorRetryPrompt: {
    id: 'location.services.alert.speed.errorRetry',
    defaultMessage: 'Try again'
  },
  speedAlertsTable: {
    nameColumn: {
      id: 'location.services.alert.speed.table.name',
      defaultMessage: 'Alert Name'
    },
    timestampColumn: {
      id: 'location.services.alert.speed.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    speedColumn: {
      id: 'location.services.alert.speed.table.speed',
      defaultMessage: 'Speed'
    }
  },
  geofenceAlertsNoGeofenceAlerts: {
    id: 'location.services.alerts.geofence.nogeofencealerts',
    defaultMessage: 'This vehicle has no geofence alerts'
  },
  geofenceAlertsNoGeofenceAlertsCallToAction: {
    id: 'location.services.alerts.geofence.nogeofencealerts.calltoaction',
    defaultMessage: 'Click here to go create some'
  },
  geofenceAlertsCreateButton: {
    id: 'location.services.alerts.geofence.creategeofencealert',
    defaultMessage: 'Create boundary alert'
  },
  geofenceAlertsCancelButton: {
    id: 'location.services.alerts.geofence.cancelgeofencealert',
    defaultMessage: 'Cancel'
  },
  geofenceAlertsErrorTitle: {
    id: 'location.services.alerts.geofence.errorTitle',
    defaultMessage: 'An error ocurred'
  },
  geofenceAlertsErrorMessage: {
    id: 'location.services.alerts.geofence.errorMessage',
    defaultMessage:
      'There was an error loading your geofence alerts. If this problem persists please contact your administrator.'
  },
  geofenceAlertsErrorRetryPrompt: {
    id: 'location.services.alert.geofence.errorRetry',
    defaultMessage: 'Try again'
  },
  geofenceAlertsTable: {
    typeColumn: {
      id: 'location.services.alert.geofence.table.type',
      defaultMessage: 'Type'
    },
    timestampColumn: {
      id: 'location.services.alert.geofence.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    locationColumn: {
      id: 'location.services.alert.geofence.table.location',
      defaultMessage: 'Location'
    },
    payloadColumn: {
      id: 'location.services.alert.geofence.table.payload',
      defaultMessage: 'Payload'
    }
  },
  valetAlertsNoValetAlerts: {
    id: 'location.services.alerts.valet.novaletalerts',
    defaultMessage: 'This vehicle has no valet alerts'
  },
  valetAlertsNoValetAlertsCallToAction: {
    id: 'location.services.alerts.valet.novaletalerts.calltoaction',
    defaultMessage: 'Click here to go create some'
  },
  valetAlertsCreateButton: {
    id: 'location.services.alerts.valet.createvaletalert',
    defaultMessage: 'Create valet alert'
  },
  valetAlertsErrorTitle: {
    id: 'location.services.alerts.valet.errorTitle',
    defaultMessage: 'An error ocurred'
  },
  valetAlertsErrorMessage: {
    id: 'location.services.alerts.valet.errorMessage',
    defaultMessage:
      'There was an error loading your valet alerts. If this problem persists please contact your administrator.'
  },
  valetAlertsErrorRetryPrompt: {
    id: 'location.services.alert.valet.errorRetry',
    defaultMessage: 'Try again'
  },
  valetAlertsTable: {
    nameColumn: {
      id: 'location.services.alert.valet.table.name',
      defaultMessage: 'Alert Name'
    },
    timestampColumn: {
      id: 'location.services.alert.valet.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    speedColumn: {
      id: 'location.services.alert.valet.table.zone',
      defaultMessage: 'Speed'
    },
    locationColumn: {
      id: 'location.services.alert.valet.table.location',
      defaultMessage: 'Location'
    }
  },
  vehicleInformationLegend: {
    id: 'vehicle.information.legend',
    defaultMessage: 'Information'
  },
  vehicleInformationHome: {
    id: 'vehicle.information.home',
    defaultMessage: 'Home'
  },
  remoteTripStatisticsLegend: {
    id: 'vehicle.information.remoteTripStatistics',
    defaultMessage: 'Remote Trip Statistics'
  },
  vehicleInformationLatestStatus: {
    id: 'vehicle.information.status.latest',
    defaultMessage: 'Latest Status'
  },
  vehicleInformationStatus: {
    id: 'vehicle.information.status',
    defaultMessage: 'Status Reports'
  },
  curfewAlertsNoCurfewAlerts: {
    id: 'location.services.alerts.curfew.nocurfewalerts',
    defaultMessage: 'This vehicle has no curfew alerts'
  },
  curfewAlertsNoCurfewAlertsCallToAction: {
    id: 'location.services.alerts.curfew.nocurfewalerts.calltoaction',
    defaultMessage: 'Click here to go create some'
  },
  curfewAlertsCreateButton: {
    id: 'location.services.alerts.curfew.createcurfewalert',
    defaultMessage: 'Create curfew alert'
  },
  curfewAlertsErrorTitle: {
    id: 'location.services.alerts.curfew.errorTitle',
    defaultMessage: 'An error ocurred'
  },
  curfewAlertsErrorMessage: {
    id: 'location.services.alerts.curfew.errorMessage',
    defaultMessage:
      'There was an error loading your curfew alerts. If this problem persists please contact your administrator.'
  },
  curfewAlertsErrorRetryPrompt: {
    id: 'location.services.alert.curfew.errorRetry',
    defaultMessage: 'Try again'
  },
  curfewAlertsTable: {
    nameColumn: {
      id: 'location.services.alert.curfew.table.name',
      defaultMessage: 'Alert Name'
    },
    timestampColumn: {
      id: 'location.services.alert.curfew.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    speedColumn: {
      id: 'location.services.alert.curfew.table.zone',
      defaultMessage: 'Speed'
    },
    locationColumn: {
      id: 'location.services.alert.curfew.table.location',
      defaultMessage: 'Location'
    }
  },
  vehicleDisplay: {
    unsupported: {
      id: 'vehicle.information.status.unsupported',
      defaultMessage: 'Unsupported'
    },
    doors: {
      frontLeftDoor: {
        id: 'vehicle.information.status.doors.frontLeftDoor',
        defaultMessage: 'Front Left Door'
      },
      hood: {
        id: 'vehicle.information.status.doors.hood',
        defaultMessage: 'Hood'
      },
      frontRightDoor: {
        id: 'vehicle.information.status.doors.frontRightdoor',
        defaultMessage: 'Front Right Door'
      },
      rearLeftDoor: {
        id: 'vehicle.information.status.doors.rearLeftDoor',
        defaultMessage: 'Rear Left Door'
      },
      rearRightDoor: {
        id: 'vehicle.information.status.doors.rearRightDoor',
        defaultMessage: 'Rear Left Door'
      },
      trunk: {
        id: 'vehicle.information.status.doors.trunk',
        defaultMessage: 'Trunk'
      },
      leftSideCargoDoor: {
        id: 'vehicle.information.status.doors.leftSideCargoDoor',
        defaultMessage: 'Left Side Cargo Door'
      },
      rightSideCargoDoor: {
        id: 'vehicle.information.status.doors.rightSideCargoDoor',
        defaultMessage: 'Right Side Cargo Door'
      }
    },
    locked: {
      id: 'vehicle.information.status.locked',
      defaultMessage: 'Locked'
    },
    unlocked: {
      id: 'vehicle.information.status.unlocked',
      defaultMessage: 'Unlocked'
    },
    open: {
      id: 'vehicle.information.status.open',
      defaultMessage: 'Open'
    },
    closed: {
      id: 'vehicle.information.status.closed',
      defaultMessage: 'Closed'
    },
    invalid: {
      id: 'vehicle.information.status.invalid',
      defaultMessage: 'Invalid'
    },
    off: {
      id: 'vehicle.information.status.off',
      defaultMessage: 'Off'
    },
    on: {
      id: 'vehicle.information.status.on',
      defaultMessage: 'On'
    },
    windows: {
      convertibleTop: {
        id: 'vehicle.information.status.windows.convertibleTop',
        defaultMessage: 'Convertible Top'
      },
      frontLeftWindow: {
        id: 'vehicle.information.status.windows.frontLeftWindow',
        defaultMessage: 'Front Left Window'
      },
      rearLeftWindow: {
        id: 'vehicle.information.status.windows.rearLeftWindow',
        defaultMessage: 'Rear Left Window'
      },
      rearRightWindow: {
        id: 'vehicle.information.status.windows.rearRightWindow',
        defaultMessage: 'Rear Right Window'
      },
      frontRightWindow: {
        id: 'vehicle.information.status.windows.frontRightWindow',
        defaultMessage: 'Front Right Window'
      },
      sunroof: {
        id: 'vehicle.information.status.windows.sunroof',
        defaultMessage: 'Sunroof'
      },
      rearSunroof: {
        id: 'vehicle.information.status.windows.rearSunroof',
        defaultMessage: 'Rear Sunroof'
      }
    },
    confidence: {
      fair: {
        id: 'vehicle.information.status.confidence.fair',
        defaultMessage: 'Fair'
      },
      good: {
        id: 'vehicle.information.status.confidence.good',
        defaultMessage: 'Good'
      },
      none: {
        id: 'vehicle.information.status.confidence.none',
        defaultMessage: 'None'
      },
      weak: {
        id: 'vehicle.information.status.confidence.weak',
        defaultMessage: 'Weak'
      }
    },
    clamp: {
      clamp15On: {
        id: 'vehicle.information.status.clamp.clamp15On',
        defaultMessage: 'Clamp 15 on'
      },
      clamp15Off: {
        id: 'vehicle.information.status.clamp.clamp15Off',
        defaultMessage: 'Clamp 15 off'
      },
      clampSOnClamp15Off: {
        id: 'vehicle.information.status.clamp.clampSOnClamp15Off',
        defaultMessage: 'Clamp S on, Clamp 15 off'
      }
    },
    reason: {
      request: {
        id: 'vehicle.information.status.reason.request',
        defaultMessage: 'Request'
      },
      ignitionOff: {
        id: 'vehicle.information.status.reason.ignitionOff',
        defaultMessage: 'Ignition OFF'
      },
      ignitionOn: {
        id: 'vehicle.information.status.reason.ignitionOn',
        defaultMessage: 'Ignition ON'
      },
      warning: {
        id: 'vehicle.information.status.reason.warning',
        defaultMessage: 'Warning'
      },
      openDuringIgnitionOff: {
        id: 'vehicle.information.status.reason.openDuringIgnitionOff',
        defaultMessage: 'Any door/trunk/hood open during Ignition OFF'
      },
      tcuPowerStatusChange: {
        id: 'vehicle.information.status.reason.tcuPowerStatusChange',
        defaultMessage: 'TCU power state change'
      },
      eCall: {
        id: 'vehicle.information.status.reason.eCall',
        defaultMessage: 'eCall'
      },
      iCall: {
        id: 'vehicle.information.status.reason.iCall',
        defaultMessage: 'iCall'
      },
      bCall: {
        id: 'vehicle.information.status.reason.bCall',
        defaultMessage: 'bCall'
      }
    },
    lightState: {
      both: {
        id: 'vehicle.information.status.lightState.both',
        defaultMessage: 'Both'
      },
      left: {
        id: 'vehicle.information.status.lightState.left',
        defaultMessage: 'Left'
      },
      right: {
        id: 'vehicle.information.status.lightState.right',
        defaultMessage: 'Right'
      },
      all: {
        id: 'vehicle.information.status.lightState.all',
        defaultMessage: 'All'
      }
    },
    kilometerShort: {
      id: 'vehicle.information.status.km',
      defaultMessage: 'km'
    },
    doorsLegend: {
      id: 'vehicle.information.status.doorsLegend',
      defaultMessage: 'Doors'
    },
    vehiclePosition: {
      id: 'vehicle.information.status.position',
      defaultMessage: 'Vehicle Position (lat, long)'
    },
    lockStatus: {
      id: 'vehicle.information.status.lock.status',
      defaultMessage: 'Lock Status'
    },
    openStatus: {
      id: 'vehicle.information.status.open.status',
      defaultMessage: 'Open Status'
    },
    status: {
      id: 'vehicle.information.status.status',
      defaultMessage: 'Status'
    },
    windowsLegend: {
      id: 'vehicle.information.status.windowsLegend',
      defaultMessage: 'Windows'
    },
    state: {
      id: 'vehicle.information.status.state',
      defaultMessage: 'State'
    },
    percentageOpen: {
      id: 'vehicle.information.status.percentageOpen',
      defaultMessage: 'Percentage Open'
    },
    overallMileage: {
      id: 'vehicle.information.status.overallMileage',
      defaultMessage: 'Overall Mileage'
    },
    altitude: {
      id: 'vehicle.information.status.altitude',
      defaultMessage: 'Altitude'
    },
    heading: {
      id: 'vehicle.information.status.heading',
      defaultMessage: 'Heading'
    },
    locationConfidence: {
      id: 'vehicle.information.status.locationConfidence',
      defaultMessage: 'Location Confidence'
    },
    terminalStatus: {
      id: 'vehicle.information.status.terminalStatus',
      defaultMessage: 'Terminal Status (clamp 15, clamp 5)'
    },
    vehicleStatusReason: {
      id: 'vehicle.information.status.vehicleStatusReason',
      defaultMessage: 'Vehicle Status Reason'
    },
    serviceIntervalKm: {
      id: 'vehicle.information.status.serviceIntervalKm',
      defaultMessage: 'Service Interval (km)'
    },
    serviceIntervalDays: {
      id: 'vehicle.information.status.serviceIntervalDays',
      defaultMessage: 'Service Interval (days)'
    },
    cabinTemperature: {
      id: 'vehicle.information.status.cabinTemperature',
      defaultMessage: 'Cabin Temperature (deci-kelvin)'
    },
    exteriorTemperature: {
      id: 'vehicle.information.status.exteriorTemperature',
      defaultMessage: 'Exterior Temperature (deci-kelvin)'
    },
    chargeState: {
      id: 'vehicle.information.status.chargeState',
      defaultMessage: 'Charge State'
    },
    estimatedCruisingRange: {
      id: 'vehicle.information.status.estimatedCruisingRange',
      defaultMessage: 'Estimated Cruising range'
    },
    parkingLightsStatus: {
      id: 'vehicle.information.status.parkingLightsStatus',
      defaultMessage: 'Parking Lights Status'
    },
    vehicleStatus: {
      id: 'vehicle.information.status.vehicleStatus',
      defaultMessage: 'Vehicle Status'
    },
    timestamp: {
      id: 'vehicle.information.status.timestamp',
      defaultMessage: 'Timestamp'
    },
    dataSentFromVehicle: {
      id: 'vehicle.information.status.dataSentFromVehicle',
      defaultMessage: '(Data sent from vehicle)'
    },
    requestVehicleStatusReport: {
      id: 'vehicle.information.status.requestVehicleStatusReport',
      defaultMessage: 'Request Vehicle Status Report'
    },
    refresh: {
      id: 'vehicle.information.status.refresh',
      defaultMessage: 'Refresh'
    },
    signal: {
      id: 'vehicle.information.status.signal',
      defaultMessage: 'Signal'
    },
    value: {
      id: 'vehicle.information.status.value',
      defaultMessage: 'Value'
    },
    noVehicleStatus: {
      id: 'vehicle.information.status.noVehicleStatus',
      defaultMessage: 'This vehicle has no status reports'
    },
    createCallToAction: {
      id: 'vehicle.information.status.createCallToAction',
      defaultMessage: 'Create a status report'
    },
    errorTitle: {
      id: 'vehicle.information.status.errorTitle',
      defaultMessage: 'An error ocurred'
    },
    errorMessage: {
      id: 'vehicle.information.status.errorMessage',
      defaultMessage:
        'There was an error while loading your vehicle status report. If this problem persists please contact your administrator.'
    },
    retryPrompt: {
      id: 'vehicle.information.status.retryPrompt',
      defaultMessage: 'Try again'
    },
    reportNumber: {
      id: 'vehicle.information.status.reportNumber',
      defaultMessage: 'Report Number'
    },
    created: {
      id: 'vehicle.information.status.created',
      defaultMessage: 'Created'
    },
    show: {
      id: 'vehicle.information.status.show',
      defaultMessage: 'Show'
    },
    statusReports: {
      id: 'vehicle.information.status.statusReports',
      defaultMessage: 'Status Reports'
    },
    back: {
      id: 'vehicle.information.status.back',
      defaultMessage: 'Back'
    }
  },
  logsRealTime: {
    id: 'vehicle.logs.realTime',
    defaultMessage: 'Real-time'
  },
  logsLatestNotifications: {
    id: 'vehicle.logs.latestNotifications',
    defaultMessage: 'Latest Notifications'
  },
  logsLegend: {
    id: 'vehicle.logs.legend',
    defaultMessage: 'Logs'
  },
  latestNotifications: {
    type: {
      id: 'vehicle.logs.latestNotifications.type',
      defaultMessage: 'Type'
    },
    timestamp: {
      id: 'vehicle.logs.latestNotifications.timestamp',
      defaultMessage: 'Timestamp'
    },
    correlationId: {
      id: 'vehicle.logs.latestNotifications.correlationId',
      defaultMessage: 'Correlation ID'
    },
    correlationIdUnknown: {
      id: 'vehicle.logs.latestNotifications.correlationIdUnknown',
      defaultMessage: 'Unknown'
    },
    data: {
      id: 'vehicle.logs.latestNotifications.data',
      defaultMessage: 'Data'
    },
    limitLabel: {
      id: 'vehicle.logs.latestNotifications.limitLabel',
      defaultMessage: 'Notifications limit:'
    },
    filtersHeader: {
      id: 'vehicle.logs.latestNotifications.filtersHeader',
      defaultMessage: 'Filters:'
    },
    typesSelectPlaceholder: {
      id: 'vehicle.logs.latestNotifications.typesSelectPlaceholder',
      defaultMessage: 'Select types to filter by'
    },
    correlationIdFilterLabel: {
      id: 'vehicle.logs.latestNotifications.correlationIdFilterLabel',
      defaultMessage: 'Filter by Correlation ID:'
    },
    correlationIdFilterPlaceholder: {
      id: 'vehicle.logs.latestNotifications.correlationIdFilterPlaceholder',
      defaultMessage: 'example1-7cd0-4caf-8e2c-b7mbd170asf0'
    },
    types: {
      valetAlertSpeed: {
        id: 'vehicle.logs.latestNotifications.types.valetAlertSpeed',
        defaultMessage: 'Valet Alert (Speed)'
      },
      valetAlertGeofence: {
        id: 'vehicle.logs.latestNotifications.types.valetAlertGeofence',
        defaultMessage: 'Valet Alert (Geofence)'
      },
      curfewAlert: {
        id: 'vehicle.logs.latestNotifications.types.curfewAlert',
        defaultMessage: 'Curfew Alert'
      },
      ActivateSubscription: {
        id: 'vehicle.logs.latestNotifications.types.ActivateSubscription',
        defaultMessage: 'Activate Subscription'
      },
      CancelSubscription: {
        id: 'vehicle.logs.latestNotifications.types.CancelSubscription',
        defaultMessage: 'Cancel Subscription'
      },
      ExpiringSubscriptionWarning: {
        id:
          'vehicle.logs.latestNotifications.types.ExpiringSubscriptionWarning',
        defaultMessage: 'Expiring Subscription Warning'
      },
      PaymentAuthorization: {
        id: 'vehicle.logs.latestNotifications.types.PaymentAuthorization',
        defaultMessage: 'Payment Authorization'
      },
      PaymentCharge: {
        id: 'vehicle.logs.latestNotifications.types.PaymentCharge',
        defaultMessage: 'Payment Charge'
      },
      PlanAssigned: {
        id: 'vehicle.logs.latestNotifications.types.PlanAssigned',
        defaultMessage: 'Plan Assigned'
      },
      PlanPaired: {
        id: 'vehicle.logs.latestNotifications.types.PlanPaired',
        defaultMessage: 'Plan Paired'
      },
      RenewalPaymentDue: {
        id: 'vehicle.logs.latestNotifications.types.RenewalPaymentDue',
        defaultMessage: 'Renewal Payment Due'
      },
      acspOperation: {
        id: 'vehicle.logs.latestNotifications.types.acspOperation',
        defaultMessage: 'ACSP Operation'
      },
      bootstrap: {
        id: 'vehicle.logs.latestNotifications.types.bootstrap',
        defaultMessage: 'Bootstrap'
      },
      boundaryAlert: {
        id: 'vehicle.logs.latestNotifications.types.boundaryAlert',
        defaultMessage: 'Boundary Alert'
      },
      climateControl: {
        id: 'vehicle.logs.latestNotifications.types.climateControl',
        defaultMessage: 'Climate Control'
      },
      commConfig: {
        id: 'vehicle.logs.latestNotifications.types.commConfig',
        defaultMessage: 'Comm. Config'
      },
      dataSweep: {
        id: 'vehicle.logs.latestNotifications.types.dataSweep',
        defaultMessage: 'Data Sweep'
      },
      installedBase: {
        id: 'vehicle.logs.latestNotifications.types.installedBase',
        defaultMessage: 'Installed Base'
      },
      intrusionAlert: {
        id: 'vehicle.logs.latestNotifications.types.intrusionAlert',
        defaultMessage: 'Intrusion Alert'
      },
      otaAction: {
        id: 'vehicle.logs.latestNotifications.types.otaAction',
        defaultMessage: 'OTA Action'
      },
      otaStatus: {
        id: 'vehicle.logs.latestNotifications.types.otaStatus',
        defaultMessage: 'OTA Status'
      },
      serviceUpdate: {
        id: 'vehicle.logs.latestNotifications.types.serviceUpdate',
        defaultMessage: 'Service Update'
      },
      speedAlert: {
        id: 'vehicle.logs.latestNotifications.types.speedAlert',
        defaultMessage: 'Speed Alert'
      },
      sva: {
        id: 'vehicle.logs.latestNotifications.types.sva',
        defaultMessage: 'SVA'
      },
      switchCommunicationsProfile: {
        id:
          'vehicle.logs.latestNotifications.types.switchCommunicationsProfile',
        defaultMessage: 'Switch Communications Profile'
      },
      tripStatistics: {
        id: 'vehicle.logs.latestNotifications.types.tripStatistics',
        defaultMessage: 'Trip Statistics'
      },
      updateCommunicationsProfile: {
        id:
          'vehicle.logs.latestNotifications.types.updateCommunicationsProfile',
        defaultMessage: 'Update Communications Profile'
      },
      vehicleMaint: {
        id: 'vehicle.logs.latestNotifications.types.vehicleMaint',
        defaultMessage: 'Vehicle Maintenance'
      },
      vehicleRegistration: {
        id: 'vehicle.logs.latestNotifications.types.vehicleRegistration',
        defaultMessage: 'Vehicle Registration'
      },
      vehicleStatus: {
        id: 'vehicle.logs.latestNotifications.types.vehicleStatus',
        defaultMessage: 'Vehicle Status'
      }
    },
    errorTitle: {
      id: 'vehicle.logs.latestNotifications.errorTitle',
      defaultMessage: 'An error ocurred'
    },
    errorMessage: {
      id: 'vehicle.logs.latestNotifications.errorMessage',
      defaultMessage:
        'There was an error loading your notifications. If this problem persists please contact your administrator.'
    },
    retryPrompt: {
      id: 'vehicle.logs.latestNotifications.retryPrompt',
      defaultMessage: 'Try again'
    },
    noNotificationsTitle: {
      id: 'vehicle.logs.latestNotifications.noNotificationsTitle',
      defaultMessage: 'This vin has no notifications'
    },
    noNotificationsCallToAction: {
      id: 'vehicle.logs.latestNotifications.noNotificationsCallToAction',
      defaultMessage: 'Trigger some remote operations to populate this list'
    }
  },
  realTime: {
    newLogs: {
      id: 'vehicle.logs.realTime.newLogs',
      defaultMessage:
        'There { difference, plural, one {is} other {are} } {difference, number} new { difference, plural, one {log} other {logs} }'
    },
    refresh: {
      id: 'vehicle.logs.realTime.refresh',
      defaultMessage: 'Refresh'
    },
    noNotificationsTitle: {
      id: 'vehicle.logs.realTime.noNotificationsTitle',
      defaultMessage: 'This vin has no notifications'
    },
    noNotificationsCallToAction: {
      id: 'vehicle.logs.realTime.noNotificationsCallToAction',
      defaultMessage: 'Trigger some remote operations to populate this list'
    },
    data: {
      id: 'vehicle.logs.realTime.data',
      defaultMessage: 'Data'
    },
    time: {
      id: 'vehicle.logs.realTime.time',
      defaultMessage: 'Time'
    }
  },
  notificationsIntrusion: {
    id: 'vehicle.notifications.intrusion',
    defaultMessage: 'Intrusion'
  },
  notificationsLatestNotifications: {
    id: 'vehicle.notifications.maintenanceScheduling',
    defaultMessage: 'Maintenance Scheduling'
  },
  notificationsServiceUpdate: {
    id: 'vehicle.notifications.service.update',
    defaultMessage: 'Service Update'
  },
  notificationsLegend: {
    id: 'vehicle.notifications.legend',
    defaultMessage: 'Notifications'
  },
  intrusionNotifications: {
    intrusionErrorTitle: {
      id: 'vehicle.intrusionNotifications.error.intrusionErrorTitle',
      defaultMessage: 'An error ocurred'
    },
    intrusionErrorMesssage: {
      id: 'vehicle.intrusionNotifications.error.intrusionErrorMesssage',
      defaultMessage:
        'There was an error loading your intrusion notifications. If this problem persists please contact your administrator.'
    },
    intrusionErrorRetryPrompt: {
      id: 'vehicle.intrusionNotifications.error.intrusionErrorRetryPrompt',
      defaultMessage: 'Try again'
    },
    noIntrusionNotifications: {
      id: 'vehicle.intrusionNotifications.none.noIntrusionNotifications',
      defaultMessage: 'No Intrusion Notifications'
    },
    noIntrusionNotificationsMessage: {
      id:
        'vehicle.intrusionNotifications.none.noIntrusionNotificationsMessge a',
      defaultMessage: 'This vehicle has no intrusion notifications.'
    }
  },
  maintenanceNotifications: {
    maintenanceErrorTitle: {
      id: 'vehicle.maintenanceNotifications.error.maintenanceErrorTitle',
      defaultMessage: 'An error ocurred'
    },
    maintenanceErrorMesssage: {
      id: 'vehicle.maintenanceNotifications.error.maintenanceErrorMesssage',
      defaultMessage:
        'There was an error loading your maintenance notifications. If this problem persists please contact your administrator.'
    },
    maintenanceErrorRetryPrompt: {
      id: 'vehicle.maintenanceNotifications.error.maintenanceErrorRetryPrompt',
      defaultMessage: 'Try again'
    },
    maintenanceTypes: {
      id: 'vehicle.maintenanceNotifications.types',
      defaultMessage: 'Vehicle Maintenance'
    },
    type: {
      id: 'vehicle.maintenanceNotifications.type',
      defaultMessage: 'Type'
    },
    timestamp: {
      id: 'vehicle.maintenanceNotifications.timestamp',
      defaultMessage: 'Timestamp'
    },
    location: {
      id: 'vehicle.maintenanceNotifications.location',
      defaultMessage: 'Location'
    },
    payload: {
      id: 'vehicle.maintenanceNotifications.payload',
      defaultMessage: 'Payload'
    },
    noMaintenanceNotifications: {
      id: 'vehicle.maintenanceNotifications.none.noMaintenanceNotifications',
      defaultMessage: 'No Maintenance Notifications'
    },

    noMaintenanceNotificationsMessage: {
      id:
        'vehicle.intrusionNotifications.none.noMaintenanceNotificationsMessge a',
      defaultMessage: 'Click here to schedule one'
    }
  },
  unknown: {
    id: 'vehicle.unknown',
    defaultMessage: 'Unknown'
  },
  remoteTripStatistics: {
    unsupported: {
      id: 'vehicle.remoteTripStatistics.table.unsupported',
      defaultMessage: 'Unsupported'
    },
    clamp15Off: {
      id: 'vehicle.remoteTripStatistics.table.clamp15Off',
      defaultMessage: 'Clamp 15 Off'
    },
    userReset: {
      id: 'vehicle.remoteTripStatistics.table.userReset',
      defaultMessage: 'User Reset'
    },
    reason: {
      id: 'vehicle.remoteTripStatistics.table.reason',
      defaultMessage: 'Reason'
    },
    timestamp: {
      id: 'vehicle.remoteTripStatistics.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    odometer: {
      id: 'vehicle.remoteTripStatistics.table.odometer',
      defaultMessage: 'Odometer'
    },
    milesShorthand: {
      id: 'vehicle.remoteTripStatistics.table.milesShorthand',
      defaultMessage: 'mi'
    },
    kmShorthand: {
      id: 'vehicle.remoteTripStatistics.table.kmShorthand',
      defaultMessage: 'km'
    },
    remoteTripStatisticsErrorTitle: {
      id: 'vehicle.remoteTripStatistics.error.remoteTripStatisticsErrorTitle',
      defaultMessage: 'An error ocurred'
    },
    remoteTripStatisticsErrorMesssage: {
      id:
        'vehicle.remoteTripStatistics.error.remoteTripStatisticsErrorMesssage',
      defaultMessage:
        'There was an error loading your Remote Trip Statistics. If this problem persists please contact your administrator.'
    },
    remoteTripStatisticsErrorRetryPrompt: {
      id:
        'vehicle.remoteTripStatistics.error.remoteTripStatisticsErrorRetryPrompt',
      defaultMessage: 'Try again'
    },
    noRemoteTripStatistics: {
      id: 'vehicle.remoteTripStatistics.none.noRemoteTripStatistics',
      defaultMessage: 'No Remote Trip Statistics'
    },
    noRemoteTripStatisticsMessage: {
      id: 'vehicle.remoteTripStatistics.none.noRemoteTripStatisticsMessage',
      defaultMessage: 'This vehicle has no remote trip statistics.'
    },
    payload: {
      id: 'vehicle.remoteTripStatistics.payload',
      defaultMessage: 'Payload'
    }
  },
  wifiStatusNavigationLegend: {
    id: 'vehicle.remoteOperations.wifiStatus',
    defaultMessage: 'WiFi Status'
  },
  wifiControlNavigationLegend: {
    id: 'vehicle.remoteOperations.wifiControl',
    defaultMessage: 'WiFi Control'
  },
  climateControlNavigationLegent: {
    id: 'vehicle.remoteOperations.climateControl',
    defaultMessage: 'Climate Control'
  },
  wifiStatusLegend: {
    id: 'vehicle.information.wifiStatusLegend',
    defaultMessage: 'WiFi Status'
  },
  wifiStatus: {
    timestamp: {
      id: 'vehicle.wifiStatus.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    wifiAPStatusData: {
      id: 'vehicle.wifiStatus.table.wifiAPConfigurationData',
      defaultMessage: 'Access Point Status Data'
    },
    wifiAPClientStatusData: {
      id: 'vehicle.wifiStatus.table.wifiAPClientStatusData',
      defaultMessage: 'Access Point Client Status Data'
    },
    wifiStatusErrorTitle: {
      id: 'vehicle.wifiStatus.error.wifiStatusErrorTitle',
      defaultMessage: 'An error ocurred'
    },
    wifiStatusErrorMesssage: {
      id: 'vehicle.wifiStatus.error.wifiStatusErrorMesssage',
      defaultMessage:
        'There was an error loading your WiFi Status entries. If this problem persists please contact your administrator.'
    },
    wifiStatusErrorRetryPrompt: {
      id: 'vehicle.wifiStatus.error.wifiStatusErrorRetryPrompt',
      defaultMessage: 'Try again'
    },
    noWifiStatus: {
      id: 'vehicle.wifiStatus.none.noWifiStatus',
      defaultMessage: 'No WiFi Status'
    },
    noWifiStatusMessage: {
      id: 'vehicle.wifiStatus.none.noWifiStatusMessage',
      defaultMessage:
        'This vehicle does not have any WiFi Status entries, click here to go to its remote operation'
    }
  },
  wifiControlLegend: {
    id: 'vehicle.information.wifiControlLegend',
    defaultMessage: 'WiFi Control'
  },
  wifiControl: {
    timestamp: {
      id: 'vehicle.wifiControl.table.timestamp',
      defaultMessage: 'Timestamp'
    },
    wifiApConfigurationData: {
      id: 'vehicle.wifiControl.table.wifiApConfigurationData',
      defaultMessage: 'Access Point Configuration Data'
    },
    wifiApClientConfigurationData: {
      id: 'vehicle.wifiControl.table.wifiApClientConfigurationData',
      defaultMessage: 'Access Point Client Configuration Data'
    },
    wifiControlErrorTitle: {
      id: 'vehicle.wifiControl.error.wifiControlErrorTitle',
      defaultMessage: 'An error ocurred'
    },
    wifiControlErrorMesssage: {
      id: 'vehicle.wifiControl.error.wifiControlErrorMesssage',
      defaultMessage:
        'There was an error loading your WiFi Control entries. If this problem persists please contact your administrator.'
    },
    wifiControlErrorRetryPrompt: {
      id: 'vehicle.wifiControl.error.wifiControlErrorRetryPrompt',
      defaultMessage: 'Try again'
    },
    noWifiControl: {
      id: 'vehicle.wifiControl.none.noWifiControl',
      defaultMessage: 'No WiFi Control'
    },
    noWifiControlMessage: {
      id: 'vehicle.wifiControl.none.noWifiControlMessage',
      defaultMessage:
        'This vehicle does not have any WiFi Control entries, click here to go to its remote operation'
    }
  },
  invalidJSON: {
    id: 'remoteOperations.commandLine.invalidJSON',
    defaultMessage: 'Invalid JSON object sent'
  },
  missingFormRequiredFields: {
    id: 'vehicle.remoteOperations.form.missing.required.fields',
    defaultMessage: 'Please fill all required fields before sending the request'
  },
  requiredField: {
    id: 'vehicle.remoteOperations.form.required.field',
    defaultMessage: 'Required Field'
  },
  enumValueRequired: {
    id: 'vehicle.remoteOperations.form.required.enum',
    defaultMessage: 'Select a value from the list'
  },
  searchVehicleID: {
    id: 'search.using.vehicleId',
    defaultMessage: 'Vehicle ID'
  },
  searchAccountDN: {
    id: 'search.using.accountDN',
    defaultMessage: 'Account'
  },
  searchVin: {
    id: 'search.using.vin',
    defaultMessage: 'VIN'
  },
  searchEmail: {
    id: 'search.using.email',
    defaultMessage: 'Email'
  },
  typeOfConnection: {
    title: {
      id: 'type.of.connection.title',
      defaultMessage: 'Type of connection'
    },
    rest: {
      id: 'type.of.connection.rest',
      defaultMessage: 'REST'
    },
    websocket: {
      id: 'type.of.connection.websocket',
      defaultMessage: 'Websocket'
    }
  },
  vinManagement: {
    title: {
      id: 'vin.management.title',
      defaultMessage: 'Manage Vehicles'
    },
    addVinButton: {
      id: 'vin.management.add.vin.button',
      defaultMessage: 'Assign Vehicle'
    },
    cancelButton: {
      id: 'vin.management.cancel.button',
      defaultMessage: 'Cancel'
    },
    duplicatedVinNumber: {
      id: 'vin.management.duplicated.vin.number',
      defaultMessage: 'Vehicle VIN number duplicated'
    },
    table: {
      userColumn: {
        id: 'vin.management.table.user.column',
        defaultMessage: 'Name'
      },
      emailColumn: {
        id: 'vin.management.table.email.column',
        defaultMessage: 'Email'
      },
      vinNumbersColumn: {
        id: 'vin.management.table.vin.numbers.column',
        defaultMessage: 'Assigned vehicles'
      },
      unassignVehicleButton: {
        id: 'vin.management.unassign.vehicle.button',
        defaultMessage: 'Click to unassign this vehicle'
      },
      noMTSUser: {
        id: 'vin.management.no.mts.user',
        defaultMessage: 'No vehicles assigned'
      },
      noMTSUserTooltip: {
        id: 'vin.management.no.mts.user.tooltip',
        defaultMessage:
          'No vehicles assigned since the user is not present in the necessary databases. Please contact the administrator.'
      }
    },
    addVin: {
      title: {
        id: 'vin.management.add.vin.form.title',
        defaultMessage: 'Assign vehicle to user'
      },
      userField: {
        id: 'vin.management.add.vin.user.field',
        defaultMessage: 'User'
      },
      numberField: {
        id: 'vin.management.add.vin.vin.field',
        defaultMessage: 'Vehicle VIN Number'
      },
      fieldsRequired: {
        id: 'vin.management.add.vin.user.fields.required',
        defaultMessage: 'All the following fields are required'
      },
      confirmButton: {
        id: 'vin.management.add.vin.confirm.button',
        defaultMessage: 'Add Vehicle to User'
      },
      success: {
        id: 'vin.management.add.vin.success',
        defaultMessage: 'Vehicle assigned successfully'
      }
    },
    deleteVin: {
      title: {
        id: 'vin.management.delete.vin.title',
        defaultMessage: 'Unassign vehicle for the user'
      },
      dialogMessage: {
        id: 'vin.management.delete.vin.dialog.message',
        defaultMessage:
          'Vehicle {vin} will be unassigned from the user {email}. Do you want to continue?'
      },
      confirmButton: {
        id: 'vin.management.delete.vin.confirm.button',
        defaultMessage: 'Confirm'
      },
      success: {
        id: 'vin.management.delete.vin.success',
        defaultMessage: 'Vehicle unassigned successfully'
      }
    }
  },
  remoteOperationsRefreshAccessToken: {
    id: 'remote.operations.refresh.access.token',
    defaultMessage: 'Refreshing Access Token'
  },
  mts: {
    error0002: {
      id: 'mts.error.0002',
      defaultMessage: 'VIN not valid'
    },
    error0003: {
      id: 'mts.error.0003',
      defaultMessage: 'VIN not registered with user'
    },
    error0005: {
      id: 'mts.error.0005',
      defaultMessage: 'VIN already registered with other User'
    },
    error0007: {
      id: 'mts.error.0007',
      defaultMessage: 'Database Operation Error'
    },
    error0008: {
      id: 'mts.error.0008',
      defaultMessage: 'User not valid'
    },
    error0009: {
      id: 'mts.error.0009',
      defaultMessage: 'VIN already assigned to user'
    },
    error0011: {
      id: 'mts.error.0011',
      defaultMessage: 'AccountDN not found'
    },
    error0014: {
      id: 'mts.error.0014',
      defaultMessage: 'VIN not present in payload'
    },
    error0015: {
      id: 'mts.error.0015',
      defaultMessage: 'Vehicle not present in payload'
    },
    error0017: {
      id: 'mts.error.0017',
      defaultMessage: 'Date of sale not present in payload'
    },
    error0018: {
      id: 'mts.error.0018',
      defaultMessage: 'No vehicles associated with that user were found'
    },
    error0019: {
      id: 'mts.error.0019',
      defaultMessage: 'Msisdn not found'
    },
    error0021: {
      id: 'mts.error.0021',
      defaultMessage: 'No users associated with that vehicle were found'
    },
    error0024: {
      id: 'mts.error.0024',
      defaultMessage: 'Primary user for that vehicle was not found'
    }
  },
  formSchema: {
    drawingMap: {
      hint: {
        id: 'form.schema.drawing.map.hint',
        defaultMessage: 'Hint: Draw the desired area on the map'
      }
    }
  },
  invalidEmptyVehicleSearch: {
    id: 'invalid.empty.vehicle.search',
    defaultMessage: 'Please enter a valid Vehicle/Account number'
  },
  vehicleSubscriptions: {
    title: {
      id: 'vehicle.subscriptions.title',
      defaultMessage: 'Subscriptions'
    },
    subscriptionTitle: {
      id: 'vehicle.subscriptions.subscription.title',
      defaultMessage: 'Subscription'
    },
    reloadButton: {
      id: 'vehicle.subscriptions.reload.button',
      defaultMessage: 'Reload'
    },
    cancelButton: {
      id: 'vehicle.subscriptions.cancel.button',
      defaultMessage: 'Cancel Subscription'
    },
    successCancelMessage: {
      id: 'vehicle.subscriptions.success.cancel.message',
      defaultMessage: 'Subscription successfully cancel'
    },
    orderId: {
      id: 'vehicle.subscriptions.order.id',
      defaultMessage: 'Order ID'
    },
    startDate: {
      id: 'vehicle.subscriptions.start.date',
      defaultMessage: 'Start Date'
    },
    expiryDate: {
      id: 'vehicle.subscriptions.expiry.date',
      defaultMessage: 'Expiry Date'
    },
    purchaseDate: {
      id: 'vehicle.subscriptions.purchase.date',
      defaultMessage: 'Purchase Date'
    },
    cancelDate: {
      id: 'vehicle.subscriptions.cancel.date',
      defaultMessage: 'Cancel Date'
    },
    packageName: {
      id: 'vehicle.subscriptions.package.name',
      defaultMessage: 'Article Name'
    },
    sku: {
      id: 'vehicle.subscriptions.sku',
      defaultMessage: 'Article SKU'
    },
    type: {
      id: 'vehicle.subscriptions.type',
      defaultMessage: 'Type of article'
    },
    category: {
      id: 'vehicle.subscriptions.category',
      defaultMessage: 'Category'
    },
    status: {
      id: 'vehicle.subscriptions.status',
      defaultMessage: 'Status'
    },
    actions: {
      id: 'vehicle.subscriptions.actions',
      defaultMessage: 'Actions'
    },
    shortDescription: {
      id: 'vehicle.subscriptions.short.description',
      defaultMessage: 'Article Description'
    },
    packageServices: {
      id: 'vehicle.subscriptions.package.services',
      defaultMessage: 'Article Services'
    },
    serviceName: {
      id: 'vehicle.subscriptions.service.name',
      defaultMessage: 'Service Name:'
    },
    noDate: {
      id: 'vehicle.subscriptions.no.date.available',
      defaultMessage: 'No date available'
    },
    noSubscriptions: {
      id: 'vehicle.subscriptions.no.subscriptions',
      defaultMessage: 'This vehicle does not have subscriptions'
    },
    loadingSubscriptions: {
      id: 'vehicle.subscriptions.loading',
      defaultMessage: 'Loading vehicle subscriptions...'
    },
    vehicleSubscriptionTab: {
      id: 'vehicle.subscriptions.vehicleSubscriptionTab',
      defaultMessage: 'Vehicle subscriptions'
    },
    purchaseZeroSubscriptionTab: {
      id: 'vehicle.subscriptions.purchaseZeroSubscriptionTab',
      defaultMessage: 'Purchase a $0 subscription'
    },
    filter: {
      label: {
        id: 'vehicle.subscriptions.filter.label',
        defaultMessage: 'Filters:'
      },
      filterType: {
        id: 'vehicle.subscriptions.filter.filterType',
        defaultMessage: 'Filter by {filterType}:'
      },
      selectPlaceholder: {
        id: 'vehicle.subscriptions.filter.select.placeholder',
        defaultMessage: 'Select type...'
      },
      options: {
        skuLabel: {
          id: 'vehicle.subscriptions.filter.select.options.skuLabel',
          defaultMessage: 'SKU'
        },
        statusLabel: {
          id: 'vehicle.subscriptions.filter.select.options.statusLabel',
          defaultMessage: 'STATUS'
        }
      },
      inputPlaceholder: {
        id: 'vehicle.subscriptions.filter.input.placeholder',
        defaultMessage: 'Enter value...'
      },
      clear: {
        id: 'vehicle.subscriptions.filter.clear',
        defaultMessage: 'Clear filter'
      }
    },
    purchaseForm: {
      sku: {
        id: 'subscriptions.purchase.form.sku',
        defaultMessage: 'Active Articles'
      },
      apiType: {
        id: 'subscriptions.purchase.form.apiType',
        defaultMessage: 'API Type'
      },
      regularApi: {
        id: 'subscriptions.purchase.form.regular.api',
        defaultMessage: 'Regular'
      },
      adminApi: {
        id: 'subscriptions.purchase.form.admin.api',
        defaultMessage: 'Admin'
      },
      availableServices: {
        id: 'subscriptions.purchase.form.available.services',
        defaultMessage: 'Available Services'
      },
      noServicesAvailable: {
        id: 'subscriptions.purchase.form.available.no.services.available',
        defaultMessage:
          'Could not retrieve list of available services for the selected product. Please try again later or select a different product.'
      },
      user: {
        id: 'subscriptions.purchase.form.available.user',
        defaultMessage: 'User'
      },
      purchaseResponse: {
        id: 'subscriptions.purchase.form.purchase.response',
        defaultMessage: 'Purchase Response'
      },
      purchaseSuccessful: {
        id: 'subscriptions.purchase.form.purchase.success',
        defaultMessage: 'Purchase Successful'
      },
      purchasePackageError: {
        id: 'subscriptions.purchase.form.purchase.error',
        defaultMessage:
          'Purchase error, pleaase try again later or contact the administrator'
      }
    },
    dialog: {
      title: {
        id: 'vehicle.subscriptions.dialog.title',
        defaultMessage: 'Cancel subscription'
      },
      question: {
        id: 'vehicle.subscriptions.dialog.question',
        defaultMessage: 'Do you want to delete the subscription?'
      },
      cancel: {
        id: 'vehicle.subscriptions.dialog.cancel',
        defaultMessage: 'CANCEL'
      },
      delete: {
        id: 'vehicle.subscriptions.dialog.delete',
        defaultMessage: 'DELETE'
      }
    }
  },
  noServicesAvailable: {
    title: {
      id: 'no.services.available.title',
      defaultMessage: 'No services available'
    },
    description: {
      id: 'no.services.available.description',
      defaultMessage:
        'This vehicle does not have services enabled on this category'
    }
  },
  loadingServices: {
    title: {
      id: 'loading.services.title',
      defaultMessage: 'Loading vehicle services'
    },
    description: {
      id: 'loading.services.description',
      defaultMessage: 'Please wait a moment'
    }
  },
  selectVehicleService: {
    title: {
      id: 'select.vehicle.service.title',
      defaultMessage: 'Select a vehicle service'
    },
    description: {
      id: 'select.vehicle.service.description',
      defaultMessage: 'Select a vehicle service from the column on the left'
    }
  },
  error404: {
    title: {
      id: '404.title',
      defaultMessage: 'Page not found'
    },
    description: {
      id: '404.description',
      defaultMessage:
        "The page you are trying to access doesn't exist, or you do not have permission to view it. Verify the URL and try again."
    }
  },
  invalidSearch: {
    id: 'error.invalid.vehicle.search',
    defaultMessage:
      'Invalid search. Please ensure the VIN or Vehicle ID number is correct'
  },
  genericNotificationTable: {
    timestampColumn: {
      id: 'generic.notificationTable.timestamp',
      defaultMessage: 'Timestamp'
    },
    payloadColumn: {
      id: 'generic.notificationTable.payload',
      defaultMessage: 'Payload'
    }
  },
  searchEventsByCorrelationId: {
    legend: {
      id: 'search.events.by.correlation.id.legend',
      defaultMessage: 'Search Events'
    },
    responseTitle: {
      id: 'search.events.by.correlation.id.response.title',
      defaultMessage: 'Response Payload'
    },
    reset: {
      id: 'search.events.by.correlation.id.reset',
      defaultMessage: 'Reset'
    },
    form: {
      correlationId: {
        id: 'search.events.by.correlation.id.correlation.id',
        defaultMessage: 'Correlation ID'
      },
      eventType: {
        id: 'search.events.by.correlation.id.event.type',
        defaultMessage: 'Event Type'
      },
      eventTypeRemoteOperation: {
        id: 'search.events.by.correlation.id.event.type.remote.operation',
        defaultMessage: 'Remote Operation'
      },
      eventTypeNotification: {
        id: 'search.events.by.correlation.id.event.type.notification',
        defaultMessage: 'Notification'
      }
    }
  },
  payloadConverter: {
    link: {
      id: 'payload.converter.link',
      defaultMessage: 'Payload converter'
    },
    select: {
      placeholder: {
        id: 'payload.converter.select.placeholder',
        defaultMessage: 'Select type'
      },
      shortToLongLabel: {
        id: 'payload.converter.select.shrotToLongLabel',
        defaultMessage: 'Short code to long code'
      },
      shortToLongValue: {
        id: 'payload.converter.select.shortToLongValue',
        defaultMessage: 'shortToLong'
      },
      longToShortLabel: {
        id: 'payload.converter.select.longToShortLabel',
        defaultMessage: 'Long code to short code'
      },
      longToShortValue: {
        id: 'payload.converter.select.longToShortValue',
        defaultMessage: 'longToShort'
      }
    },
    headers: {
      input: {
        id: 'payload.converter.headers.input',
        defaultMessage: 'Input'
      },
      output: {
        id: 'payload.converter.headers.output',
        defaultMessage: 'Output'
      }
    },
    form: {
      textarea: {
        id: 'payload.converter.form.textarea',
        defaultMessage: 'Payload to transform...'
      },
      button: {
        id: 'payload.converter.form.button',
        defaultMessage: 'Convert'
      }
    }
  },
  metadata: {
    legend: {
      id: 'vehicle.metadata.legend',
      defaultMessage: 'Metadata'
    },
    refresh: {
      id: 'vehicle.metadata.refresh',
      defaultMessage: 'Refresh'
    },
    force: {
      id: 'vehicle.metadata.force.metadata',
      defaultMessage: 'Force metadata'
    },
    success: {
      id: 'vehicle.metadata.success',
      defaultMessage: 'Vehicle metadata successfully retrieved'
    },
    showServices: {
      id: 'vehicle.metadata.show.services',
      defaultMessage: 'Show Services'
    },
    servicesSuccess: {
      id: 'vehicle.metadata.show.services.success',
      defaultMessage: 'Vehicle metadata services successfully retrieved'
    },
    servicesTitle: {
      id: 'vehicle.metadata.services.title',
      defaultMessage: 'Services Response'
    },
    pushSuccess: {
      id: 'vehicle.metadata.push.success',
      defaultMessage: 'Metadata force push successful'
    }
  },
  simCustomAttributes: {
    title: {
      id: 'sim.custome.attributes.title',
      defaultMessage: 'SIM Custom Attributes'
    },
    link: {
      id: 'sim.custome.attributes.link',
      defaultMessage: 'SIM Custom Attributes'
    },
    reloadButton: {
      id: 'sim.custome.attributes.reloadButton',
      defaultMessage: 'Reload'
    }
  },
  acspTransactions: {
    title: {
      id: 'acsp.transactions.title',
      defaultMessage: 'ACSP Transactions'
    },
    reloadButton: {
      id: 'acsp.transactions.reloadButton',
      defaultMessage: 'Reload'
    },
    link: {
      id: 'acsp.transactions.link',
      defaultMessage: 'ACSP Transactions'
    },
    table: {
      id: {
        id: 'acsp.transactions.id',
        defaultMessage: 'Id'
      },
      startDate: {
        id: 'acsp.transactions.startDate',
        defaultMessage: 'Start Date'
      },
      nullStartDate: {
        id: 'acsp.transactions.nullStartDate',
        defaultMessage: 'No date avilable'
      },
      eid: {
        id: 'acsp.transactions.eid',
        defaultMessage: 'EID'
      },
      operation: {
        id: 'acsp.transactions.operation',
        defaultMessage: 'Operation'
      },
      payload: {
        id: 'acsp.transactions.payload',
        defaultMessage: 'Payload'
      },
      resultMessage: {
        id: 'acsp.transactions.resultMessage',
        defaultMessage: 'Message'
      },
      status: {
        id: 'acsp.transactions.status',
        defaultMessage: 'Status'
      },
      transactionId: {
        id: 'acsp.transactions.transactionId',
        defaultMessage: 'Transaction Id'
      },
      nullTransactionId: {
        id: 'acsp.transactions.nullTransactionId',
        defaultMessage: 'Not available'
      },
      vin: {
        id: 'acsp.transactions.vin',
        defaultMessage: 'Vin'
      }
    }
  },
  invalidJson: {
    id: 'invalidJson',
    defaultMessage: 'Invalid Json'
  },
  componentHeader: {
    title: {
      id: 'component.header.title',
      defaultMessage: 'Header'
    }
  },
  mdp: {
    link: {
      id: 'mdp.link',
      defaultMessage: 'MDP Details'
    },
    reloadButton: {
      id: 'mdp.reloadButton',
      defaultMessage: 'Reload'
    }
  },
  tcuData: {
    link: {
      id: 'tcu.data.link',
      defaultMessage: 'TCU Data'
    },
    reload: {
      id: 'tcu.data.reload',
      defaultMessage: 'Reload'
    }
  }
});
