<template>
    <v-theme-provider   theme="dark" with-background class="pa-20 ">
      <v-card color="#ff5447" title="Title" subtitle="Subtitle"> <div  class="text-overline mb-4">
          Office Employees
        </div><v-list-item-title class="text-h1 mb-1">
          {{$store.getters.totalStaff+$store.getters.totalAdmin}}
        </v-list-item-title><div class="text-overline mb-4">
          Staffs
        </div>
        <v-list-item-title class="text-h1 mb-1">
          {{$store.getters.totalStaff}}
        </v-list-item-title><div class="text-overline mb-4">
          Admins
        </div>
        <v-list-item-title class="text-h1 mb-1">
          {{$store.getters.totalAdmin}}
        </v-list-item-title></v-card>
    </v-theme-provider>
    
  </template>
  