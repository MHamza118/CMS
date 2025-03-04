
// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyDmVkS1JM0-fu1cXGRCqrxZ0J1gOiK5SkY",
  authDomain: "fspro-c4de5.firebaseapp.com",
  databaseURL: "https://fspro-c4de5-default-rtdb.firebaseio.com",
  projectId: "fspro-c4de5",
  storageBucket: "fspro-c4de5.firebasestorage.app",
  messagingSenderId: "64912892208",
  appId: "1:64912892208:web:238c0401f701d2118128f5",
  measurementId: "G-72DC4PW8YF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Database functions
const firebaseDB = {
  // Users
  saveUsers: function(users) {
    return db.ref('users').set(users);
  },
  getUsers: async function() {
    const snapshot = await db.ref('users').once('value');
    return snapshot.val() || {};
  },
  
  // Attendance records
  saveAttendanceRecords: function(records) {
    return db.ref('attendanceRecords').set(records);
  },
  getAttendanceRecords: async function() {
    const snapshot = await db.ref('attendanceRecords').once('value');
    return snapshot.val() || [];
  },
  
  // Late check-ins
  saveLateCheckIns: function(checkIns) {
    return db.ref('lateCheckIns').set(checkIns);
  },
  getLateCheckIns: async function() {
    const snapshot = await db.ref('lateCheckIns').once('value');
    return snapshot.val() || [];
  },
  
  // Holiday requests
  saveHolidayRequests: function(requests) {
    return db.ref('holidayRequests').set(requests);
  },
  getHolidayRequests: async function() {
    const snapshot = await db.ref('holidayRequests').once('value');
    return snapshot.val() || [];
  },
  
  // Progress reports
  saveProgressReports: function(reports) {
    return db.ref('progressReports').set(reports);
  },
  getProgressReports: async function() {
    const snapshot = await db.ref('progressReports').once('value');
    return snapshot.val() || [];
  },
  
  // Time tables
  saveTimeTables: function(timeTables) {
    return db.ref('timeTables').set(timeTables);
  },
  getTimeTables: async function() {
    const snapshot = await db.ref('timeTables').once('value');
    return snapshot.val() || [];
  },
  
  // Missed check-ins
  saveMissedCheckIns: function(missedCheckIns) {
    return db.ref('missedCheckIns').set(missedCheckIns);
  },
  getMissedCheckIns: async function() {
    const snapshot = await db.ref('missedCheckIns').once('value');
    return snapshot.val() || [];
  },
  
  // Employee tasks
  saveEmployeeTasks: function(tasks) {
    return db.ref('employeeTasks').set(tasks);
  },
  getEmployeeTasks: async function() {
    const snapshot = await db.ref('employeeTasks').once('value');
    return snapshot.val() || [];
  },
  
  // Notifications
  saveNotifications: function(notifications) {
    return db.ref('notifications').set(notifications);
  },
  getNotifications: async function() {
    const snapshot = await db.ref('notifications').once('value');
    return snapshot.val() || [];
  }
};
