<template>
  <div>
    <h1>A Chat app made with</h1>
    <b-container fluid class="chat-window">
      <b-row>
        <b-col cols="3" class="mr-0">
          <div class="">
            <div class="">
              <div class="list-group available-server-list">
                <div class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <div class="media align-items-center">
                      <span class="avatar mr-3">
                        <img
                          alt="User"
                          :src="'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Farun-panneerselvam-b0b33927%2F&psig=AOvVaw0MiM7-BpP07ek8gKsl03Fs&ust=1605399514415000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiiubHhgO0CFQAAAAAdAAAAABAD'"
                          width="25"
                          height="35"
                        />
                      </span>
                      <div class="media-body">
                        <h5 class="mb-1 primary">aeroarunn</h5>
                        <span class="name mb-0 text-sm">Hi ther...</span>
                      </div>
                    </div>
                    <small><badge variant="warning">-></badge></small>
                  </div>
                </div>
                <div class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <div class="media align-items-center">
                      <span class="avatar mr-3">
                        <img
                          alt="User"
                          :src="'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Farun-panneerselvam-b0b33927%2F&psig=AOvVaw0MiM7-BpP07ek8gKsl03Fs&ust=1605399514415000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiiubHhgO0CFQAAAAAdAAAAABAD'"
                          width="25"
                          height="35"
                        />
                      </span>
                      <div class="media-body">
                        <h5 class="mb-1 primary">Chat Title</h5>
                        <span class="name mb-0 text-sm">Chat text...</span>
                      </div>
                    </div>
                    <small><badge variant="warning">SHARED</badge></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="7">
          <div class="chatBox">
            <div class="chatBox-msg-from">
              <p class="chatBox-msg-from-txt">Hi there remoteuser!</p>
              <div class="chatbox-msg-from-when-you">Sat 14 2020 3:54PM</div>
            </div>
            <div class="chatBox-msg-to">
              <p class="chatBox-msg-to-txt">Hi there, me!</p>
              <div class="chatbox-msg-from-when-them">Sat 14 2020 3:55PM</div>
            </div>
          </div>
          <div class="msg-input-box">
            <div>
              <b-input-group>
                <template #prepend>
                  <b-dropdown text="Dropdown" variant="info">
                    <b-dropdown-item>Action A</b-dropdown-item>
                    <b-dropdown-item>Action B</b-dropdown-item>
                  </b-dropdown>
                </template>

                <b-form-input></b-form-input>

                <template #append>
                  <b-dropdown
                    text="Dropdown"
                    variant="outline-secondary"
                    v-for="i in 2"
                    :key="i"
                  >
                    <b-dropdown-item>Action C</b-dropdown-item>
                    <b-dropdown-item>Action D</b-dropdown-item>
                  </b-dropdown>
                </template>

                <b-input-group-append>
                  <b-button size="md" text="Button" variant="success"
                    >Send</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>
        </b-col>
        <b-col cols="2">Chat Info</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Chat",
  components: {},
  props: {},
  computed: {},
  methods: {},
  data() {
    return {
      chats: [
        {
          from: "aeroarunn",
          recent: "never heard of..",
          messages: [
            {
              when: "",
              message: {
                type: String,
                content:
                  "never heard of them before. What is the best case scenario?",
              },
            },
          ],
        },
        {
          from: "cosmoarunn",
          recent: "no matter..",
          messages: [
            {
              when: "",
              message: {
                type: String,
                content:
                  "no matter what you heard., just don't believ it! it's worthless spending time on that!",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
<!-- 
*, *::before, *::after {
    box-sizing: inherit;
-->
<style lang="sass" scoped>
*
  box-sizing: content-box
  &:before
    box-sizing: content-box
  &:after
    box-sizing: content-box

input
  box-sizing: content-box

.chat-window
  background-color: #f9f9f9
  margin: 12px 4px 3px
  .mr-0
    margin-right: 0
  .ml-0
    margin-left: 0

.media
  display: flex
  align-items: flex-start

  &-body
    flex: 1

.w-100
  width: 100%

.avatar
  color: #fff
  background-color: #adb5bd
  display: -webkit-inline-box
  display: -ms-inline-flexbox
  display: inline-flex
  -webkit-box-align: center
  -ms-flex-align: center
  align-items: center
  -webkit-box-pack: center
  -ms-flex-pack: center
  justify-content: center
  font-size: 1rem
  border-radius: 50%
  height: 48px
  width: 48px

.chatBox
  border: 1px solid #d3d3d3
  background-color: #fff
  overflow-y: scroll
  height: 300px
  padding: 10px 5px
  &-msg-from
    padding: 3px 2px 1p
    margin: 12px 5px
    margin-left: 10%
    &-txt
      border: 2px solid #c4d6f1
      border-radius: 5px
      padding: 2px 8px 6px
      color: #250303
      text-align: right
      font-weight: 500
      background-color: #6d96d452
      &:visited
        color: #333333
      &:hover
        border-color: #ff0000
      &:active
        color: #7d7d7d
    &-when-you
      text-align: right
      font-size: .7rem
      color: #9198ca
      font-weight: 800
  &-msg-to
    padding: 3px 2px 1px
    margin: 12px 5px
    margin-right: 10%
    &-txt
      background-color: #8393c1
      padding: 2px 8px 6px
      text-align: left
      color: #ffffff
      border: 1px solid #cccccc
      border-radius: 5px
      font-weight: 500
      &:hover
        border-color: #250303
      &:visited
        color: #333333
      &:active
        color: #ff0000
    &-when-them
      text-align: right
      font-size: .7rem
      color: #9198ca
      font-weight: 800

.list-group-item
  background-color: #f5f5f5
  cursor: pointer
  &:active
    background-color: #ffffff
    border-right: none
  &:hover
    background-color: #ffffff
    border-right: none
</style>
