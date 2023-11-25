/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Person {
  /** @format int32 */
  id?: number;
  firstName?: string;
  lastName?: string;
  /** @format int32 */
  age?: number;
  /** @format int32 */
  visits?: number;
  /** @format int32 */
  progress?: number;
  status?: string;
  address?: string;
  email?: string;
  admin?: boolean;
}

export interface AccessAction {
  oDataType?: string;
}

export interface ActivityHistoryItem {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  activeDurationSeconds?: number;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  expirationDateTime?: string;
  /** @format date-time */
  lastActiveDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  /** @format date-time */
  startedDateTime?: string;
  status?: "ACTIVE" | "UPDATED" | "DELETED" | "IGNORED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  userTimezone?: string;
  activity?: UserActivity;
}

export interface ActivityHistoryItemCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ActivityHistoryItemCollectionRequestBuilder;
  currentPage?: ActivityHistoryItem[];
}

export interface ActivityHistoryItemCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface AgreementAcceptance {
  oDataType?: string;
  id?: string;
  agreementFileId?: string;
  agreementId?: string;
  deviceDisplayName?: string;
  deviceId?: string;
  deviceOSType?: string;
  deviceOSVersion?: string;
  /** @format date-time */
  expirationDateTime?: string;
  /** @format date-time */
  recordedDateTime?: string;
  state?: "ACCEPTED" | "DECLINED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  userDisplayName?: string;
  userEmail?: string;
  userId?: string;
  userPrincipalName?: string;
}

export interface AgreementAcceptanceCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AgreementAcceptanceCollectionRequestBuilder;
  currentPage?: AgreementAcceptance[];
}

export interface AgreementAcceptanceCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Album {
  oDataType?: string;
  coverImageItemId?: string;
}

export interface AlternativeSecurityId {
  oDataType?: string;
  identityProvider?: string;
  key?: string[];
  /** @format int32 */
  type?: number;
}

export interface AppIdentity {
  oDataType?: string;
  appId?: string;
  displayName?: string;
  servicePrincipalId?: string;
  servicePrincipalName?: string;
}

export interface AppRoleAssignment {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  deletedDateTime?: string;
  /** @format uuid */
  appRoleId?: string;
  /** @format date-time */
  createdDateTime?: string;
  principalDisplayName?: string;
  /** @format uuid */
  principalId?: string;
  principalType?: string;
  resourceDisplayName?: string;
  /** @format uuid */
  resourceId?: string;
}

export interface AppRoleAssignmentCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AppRoleAssignmentCollectionRequestBuilder;
  currentPage?: AppRoleAssignment[];
}

export interface AppRoleAssignmentCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface AssignedLabel {
  oDataType?: string;
  displayName?: string;
  labelId?: string;
}

export interface AssignedLicense {
  oDataType?: string;
  disabledPlans?: string[];
  /** @format uuid */
  skuId?: string;
}

export interface AssignedPlan {
  oDataType?: string;
  /** @format date-time */
  assignedDateTime?: string;
  capabilityStatus?: string;
  service?: string;
  /** @format uuid */
  servicePlanId?: string;
}

export interface AssociatedTeamInfo {
  oDataType?: string;
  id?: string;
  displayName?: string;
  tenantId?: string;
  team?: Team;
}

export interface AssociatedTeamInfoCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AssociatedTeamInfoCollectionRequestBuilder;
  currentPage?: AssociatedTeamInfo[];
}

export interface AssociatedTeamInfoCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Attachment {
  oDataType?: string;
  id?: string;
  contentType?: string;
  isInline?: boolean;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  /** @format int32 */
  size?: number;
}

export interface AttachmentBase {
  oDataType?: string;
  id?: string;
  contentType?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  /** @format int32 */
  size?: number;
}

export interface AttachmentBaseCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AttachmentBaseCollectionRequestBuilder;
  currentPage?: AttachmentBase[];
}

export interface AttachmentBaseCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface AttachmentCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AttachmentCollectionRequestBuilder;
  currentPage?: Attachment[];
}

export interface AttachmentCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface AttachmentSession {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  expirationDateTime?: string;
  nextExpectedRanges?: string[];
}

export interface AttachmentSessionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AttachmentSessionCollectionRequestBuilder;
  currentPage?: AttachmentSession[];
}

export interface AttachmentSessionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface AttendanceInterval {
  oDataType?: string;
  /** @format int32 */
  durationInSeconds?: number;
  /** @format date-time */
  joinDateTime?: string;
  /** @format date-time */
  leaveDateTime?: string;
}

export interface AttendanceRecord {
  oDataType?: string;
  id?: string;
  attendanceIntervals?: AttendanceInterval[];
  emailAddress?: string;
  identity?: Identity;
  role?: string;
  /** @format int32 */
  totalAttendanceInSeconds?: number;
}

export interface AttendanceRecordCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AttendanceRecordCollectionRequestBuilder;
  currentPage?: AttendanceRecord[];
}

export interface AttendanceRecordCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Attendee {
  oDataType?: string;
  emailAddress?: EmailAddress;
  type?: "REQUIRED" | "OPTIONAL" | "RESOURCE" | "UNEXPECTED_VALUE";
  proposedNewTime?: TimeSlot;
  status?: ResponseStatus;
}

export interface Audio {
  oDataType?: string;
  album?: string;
  albumArtist?: string;
  artist?: string;
  /** @format int64 */
  bitrate?: number;
  composers?: string;
  copyright?: string;
  /** @format int32 */
  disc?: number;
  /** @format int32 */
  discCount?: number;
  /** @format int64 */
  duration?: number;
  genre?: string;
  hasDrm?: boolean;
  isVariableBitrate?: boolean;
  title?: string;
  /** @format int32 */
  track?: number;
  /** @format int32 */
  trackCount?: number;
  /** @format int32 */
  year?: number;
}

export interface AudioConferencing {
  oDataType?: string;
  conferenceId?: string;
  dialinUrl?: string;
  tollFreeNumber?: string;
  tollFreeNumbers?: string[];
  tollNumber?: string;
  tollNumbers?: string[];
}

export interface Authentication {
  oDataType?: string;
  id?: string;
  emailMethods?: EmailAuthenticationMethodCollectionPage;
  fido2Methods?: Fido2AuthenticationMethodCollectionPage;
  methods?: AuthenticationMethodCollectionPage;
  microsoftAuthenticatorMethods?: MicrosoftAuthenticatorAuthenticationMethodCollectionPage;
  operations?: LongRunningOperationCollectionPage;
  passwordMethods?: PasswordAuthenticationMethodCollectionPage;
  phoneMethods?: PhoneAuthenticationMethodCollectionPage;
  softwareOathMethods?: SoftwareOathAuthenticationMethodCollectionPage;
  temporaryAccessPassMethods?: TemporaryAccessPassAuthenticationMethodCollectionPage;
  windowsHelloForBusinessMethods?: WindowsHelloForBusinessAuthenticationMethodCollectionPage;
}

export interface AuthenticationMethod {
  oDataType?: string;
  id?: string;
}

export interface AuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: AuthenticationMethodCollectionRequestBuilder;
  currentPage?: AuthenticationMethod[];
}

export interface AuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface AuthorizationInfo {
  oDataType?: string;
  certificateUserIds?: string[];
}

export interface AutomaticRepliesSetting {
  oDataType?: string;
  externalAudience?: "NONE" | "CONTACTS_ONLY" | "ALL" | "UNEXPECTED_VALUE";
  externalReplyMessage?: string;
  internalReplyMessage?: string;
  scheduledEndDateTime?: DateTimeTimeZone;
  scheduledStartDateTime?: DateTimeTimeZone;
  status?: "DISABLED" | "ALWAYS_ENABLED" | "SCHEDULED" | "UNEXPECTED_VALUE";
}

export interface BaseItem {
  oDataType?: string;
  id?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
}

export interface BaseItemCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: BaseItemCollectionRequestBuilder;
  currentPage?: BaseItem[];
}

export interface BaseItemCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface BooleanColumn {
  oDataType?: string;
}

export interface BroadcastMeetingCaptionSettings {
  oDataType?: string;
  isCaptionEnabled?: boolean;
  spokenLanguage?: string;
  translationLanguages?: string[];
}

export interface BroadcastMeetingSettings {
  oDataType?: string;
  allowedAudience?: "ROLE_IS_ATTENDEE" | "ORGANIZATION" | "EVERYONE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  captions?: BroadcastMeetingCaptionSettings;
  isAttendeeReportEnabled?: boolean;
  isQuestionAndAnswerEnabled?: boolean;
  isRecordingEnabled?: boolean;
  isVideoOnDemandEnabled?: boolean;
}

export interface Bundle {
  oDataType?: string;
  album?: Album;
  /** @format int32 */
  childCount?: number;
}

export interface CalculatedColumn {
  oDataType?: string;
  format?: string;
  formula?: string;
  outputType?: string;
}

export interface Calendar {
  oDataType?: string;
  id?: string;
  allowedOnlineMeetingProviders?: (
    | "UNKNOWN"
    | "SKYPE_FOR_BUSINESS"
    | "SKYPE_FOR_CONSUMER"
    | "TEAMS_FOR_BUSINESS"
    | "UNEXPECTED_VALUE"
  )[];
  canEdit?: boolean;
  canShare?: boolean;
  canViewPrivateItems?: boolean;
  changeKey?: string;
  color?:
    | "AUTO"
    | "LIGHT_BLUE"
    | "LIGHT_GREEN"
    | "LIGHT_ORANGE"
    | "LIGHT_GRAY"
    | "LIGHT_YELLOW"
    | "LIGHT_TEAL"
    | "LIGHT_PINK"
    | "LIGHT_BROWN"
    | "LIGHT_RED"
    | "MAX_COLOR"
    | "UNEXPECTED_VALUE";
  defaultOnlineMeetingProvider?:
    | "UNKNOWN"
    | "SKYPE_FOR_BUSINESS"
    | "SKYPE_FOR_CONSUMER"
    | "TEAMS_FOR_BUSINESS"
    | "UNEXPECTED_VALUE";
  hexColor?: string;
  isDefaultCalendar?: boolean;
  isRemovable?: boolean;
  isTallyingResponses?: boolean;
  name?: string;
  owner?: EmailAddress;
  calendarPermissions?: CalendarPermissionCollectionPage;
  calendarView?: EventCollectionPage;
  events?: EventCollectionPage;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface CalendarCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: CalendarCollectionRequestBuilder;
  currentPage?: Calendar[];
}

export interface CalendarCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface CalendarGroup {
  oDataType?: string;
  id?: string;
  changeKey?: string;
  /** @format uuid */
  classId?: string;
  name?: string;
  calendars?: CalendarCollectionPage;
}

export interface CalendarGroupCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: CalendarGroupCollectionRequestBuilder;
  currentPage?: CalendarGroup[];
}

export interface CalendarGroupCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface CalendarPermission {
  oDataType?: string;
  id?: string;
  allowedRoles?: (
    | "NONE"
    | "FREE_BUSY_READ"
    | "LIMITED_READ"
    | "READ"
    | "WRITE"
    | "DELEGATE_WITHOUT_PRIVATE_EVENT_ACCESS"
    | "DELEGATE_WITH_PRIVATE_EVENT_ACCESS"
    | "CUSTOM"
    | "UNEXPECTED_VALUE"
  )[];
  emailAddress?: EmailAddress;
  isInsideOrganization?: boolean;
  isRemovable?: boolean;
  role?:
    | "NONE"
    | "FREE_BUSY_READ"
    | "LIMITED_READ"
    | "READ"
    | "WRITE"
    | "DELEGATE_WITHOUT_PRIVATE_EVENT_ACCESS"
    | "DELEGATE_WITH_PRIVATE_EVENT_ACCESS"
    | "CUSTOM"
    | "UNEXPECTED_VALUE";
}

export interface CalendarPermissionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: CalendarPermissionCollectionRequestBuilder;
  currentPage?: CalendarPermission[];
}

export interface CalendarPermissionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface CallRecording {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  meetingId?: string;
  meetingOrganizer?: IdentitySet;
  recordingContentUrl?: string;
}

export interface CallRecordingCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: CallRecordingCollectionRequestBuilder;
  currentPage?: CallRecording[];
}

export interface CallRecordingCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface CallTranscript {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  meetingId?: string;
  meetingOrganizer?: IdentitySet;
  transcriptContentUrl?: string;
}

export interface CallTranscriptCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: CallTranscriptCollectionRequestBuilder;
  currentPage?: CallTranscript[];
}

export interface CallTranscriptCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Channel {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  email?: string;
  isFavoriteByDefault?: boolean;
  membershipType?: "STANDARD" | "PRIVATE" | "UNKNOWN_FUTURE_VALUE" | "SHARED" | "UNEXPECTED_VALUE";
  summary?: ChannelSummary;
  tenantId?: string;
  webUrl?: string;
  filesFolder?: DriveItem;
  members?: ConversationMemberCollectionPage;
  messages?: ChatMessageCollectionPage;
  sharedWithTeams?: SharedWithChannelTeamInfoCollectionPage;
  tabs?: TeamsTabCollectionPage;
}

export interface ChannelCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ChannelCollectionRequestBuilder;
  currentPage?: Channel[];
}

export interface ChannelCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
  allMessages?: ChannelGetAllMessagesCollectionRequestBuilder;
}

export interface ChannelGetAllMessagesCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ChannelIdentity {
  oDataType?: string;
  channelId?: string;
  teamId?: string;
}

export interface ChannelSummary {
  oDataType?: string;
  /** @format int32 */
  guestsCount?: number;
  hasMembersFromOtherTenants?: boolean;
  /** @format int32 */
  membersCount?: number;
  /** @format int32 */
  ownersCount?: number;
}

export interface Chat {
  oDataType?: string;
  id?: string;
  chatType?: "ONE_ON_ONE" | "GROUP" | "MEETING" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastUpdatedDateTime?: string;
  onlineMeetingInfo?: TeamworkOnlineMeetingInfo;
  tenantId?: string;
  topic?: string;
  viewpoint?: ChatViewpoint;
  webUrl?: string;
  installedApps?: TeamsAppInstallationCollectionPage;
  lastMessagePreview?: ChatMessageInfo;
  members?: ConversationMemberCollectionPage;
  messages?: ChatMessageCollectionPage;
  permissionGrants?: ResourceSpecificPermissionGrantCollectionPage;
  pinnedMessages?: PinnedChatMessageInfoCollectionPage;
  tabs?: TeamsTabCollectionPage;
}

export interface ChatCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ChatCollectionRequestBuilder;
  currentPage?: Chat[];
}

export interface ChatCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
  allMessages?: ChatGetAllMessagesCollectionRequestBuilder;
}

export interface ChatGetAllMessagesCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ChatInfo {
  oDataType?: string;
  messageId?: string;
  replyChainMessageId?: string;
  threadId?: string;
}

export interface ChatMessage {
  oDataType?: string;
  id?: string;
  attachments?: ChatMessageAttachment[];
  body?: ItemBody;
  channelIdentity?: ChannelIdentity;
  chatId?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  deletedDateTime?: string;
  etag?: string;
  eventDetail?: EventMessageDetail;
  from?: ChatMessageFromIdentitySet;
  importance?: "NORMAL" | "HIGH" | "URGENT" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  lastEditedDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  locale?: string;
  mentions?: ChatMessageMention[];
  messageHistory?: ChatMessageHistoryItem[];
  messageType?:
    | "MESSAGE"
    | "CHAT_EVENT"
    | "TYPING"
    | "UNKNOWN_FUTURE_VALUE"
    | "SYSTEM_EVENT_MESSAGE"
    | "UNEXPECTED_VALUE";
  policyViolation?: ChatMessagePolicyViolation;
  reactions?: ChatMessageReaction[];
  replyToId?: string;
  subject?: string;
  summary?: string;
  webUrl?: string;
  hostedContents?: ChatMessageHostedContentCollectionPage;
  replies?: ChatMessageCollectionPage;
}

export interface ChatMessageAttachment {
  oDataType?: string;
  content?: string;
  contentType?: string;
  contentUrl?: string;
  id?: string;
  name?: string;
  teamsAppId?: string;
  thumbnailUrl?: string;
}

export interface ChatMessageCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ChatMessageCollectionRequestBuilder;
  currentPage?: ChatMessage[];
}

export interface ChatMessageCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ChatMessageFromIdentitySet {
  oDataType?: string;
  application?: Identity;
  device?: Identity;
  user?: Identity;
}

export interface ChatMessageHistoryItem {
  oDataType?: string;
  actions?: (
    | "REACTION_ADDED"
    | "REACTION_REMOVED"
    | "ACTION_UNDEFINED"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  /** @format date-time */
  modifiedDateTime?: string;
  reaction?: ChatMessageReaction;
}

export interface ChatMessageHostedContent {
  oDataType?: string;
  id?: string;
  contentBytes?: string[];
  contentType?: string;
}

export interface ChatMessageHostedContentCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ChatMessageHostedContentCollectionRequestBuilder;
  currentPage?: ChatMessageHostedContent[];
}

export interface ChatMessageHostedContentCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ChatMessageInfo {
  oDataType?: string;
  id?: string;
  body?: ItemBody;
  /** @format date-time */
  createdDateTime?: string;
  eventDetail?: EventMessageDetail;
  from?: ChatMessageFromIdentitySet;
  isDeleted?: boolean;
  messageType?:
    | "MESSAGE"
    | "CHAT_EVENT"
    | "TYPING"
    | "UNKNOWN_FUTURE_VALUE"
    | "SYSTEM_EVENT_MESSAGE"
    | "UNEXPECTED_VALUE";
}

export interface ChatMessageMention {
  oDataType?: string;
  /** @format int32 */
  id?: number;
  mentioned?: ChatMessageMentionedIdentitySet;
  mentionText?: string;
}

export interface ChatMessageMentionedIdentitySet {
  oDataType?: string;
  application?: Identity;
  device?: Identity;
  user?: Identity;
  conversation?: TeamworkConversationIdentity;
}

export interface ChatMessagePolicyViolation {
  oDataType?: string;
  dlpAction?: ("NONE" | "NOTIFY_SENDER" | "BLOCK_ACCESS" | "BLOCK_ACCESS_EXTERNAL" | "UNEXPECTED_VALUE")[];
  justificationText?: string;
  policyTip?: ChatMessagePolicyViolationPolicyTip;
  userAction?: ("NONE" | "OVERRIDE" | "REPORT_FALSE_POSITIVE" | "UNEXPECTED_VALUE")[];
  verdictDetails?: (
    | "NONE"
    | "ALLOW_FALSE_POSITIVE_OVERRIDE"
    | "ALLOW_OVERRIDE_WITHOUT_JUSTIFICATION"
    | "ALLOW_OVERRIDE_WITH_JUSTIFICATION"
    | "UNEXPECTED_VALUE"
  )[];
}

export interface ChatMessagePolicyViolationPolicyTip {
  oDataType?: string;
  complianceUrl?: string;
  generalText?: string;
  matchedConditionDescriptions?: string[];
}

export interface ChatMessageReaction {
  oDataType?: string;
  /** @format date-time */
  createdDateTime?: string;
  reactionType?: string;
  user?: ChatMessageReactionIdentitySet;
}

export interface ChatMessageReactionIdentitySet {
  oDataType?: string;
  application?: Identity;
  device?: Identity;
  user?: Identity;
}

export interface ChatViewpoint {
  oDataType?: string;
  isHidden?: boolean;
  /** @format date-time */
  lastMessageReadDateTime?: string;
}

export interface ChecklistItem {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  checkedDateTime?: string;
  /** @format date-time */
  createdDateTime?: string;
  displayName?: string;
  isChecked?: boolean;
}

export interface ChecklistItemCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ChecklistItemCollectionRequestBuilder;
  currentPage?: ChecklistItem[];
}

export interface ChecklistItemCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ChoiceColumn {
  oDataType?: string;
  allowTextEntry?: boolean;
  choices?: string[];
  displayAs?: string;
}

export interface ColumnDefinition {
  oDataType?: string;
  id?: string;
  msgraphBoolean?: BooleanColumn;
  calculated?: CalculatedColumn;
  choice?: ChoiceColumn;
  columnGroup?: string;
  contentApprovalStatus?: ContentApprovalStatusColumn;
  currency?: CurrencyColumn;
  dateTime?: DateTimeColumn;
  defaultValue?: DefaultColumnValue;
  description?: string;
  displayName?: string;
  enforceUniqueValues?: boolean;
  geolocation?: GeolocationColumn;
  hidden?: boolean;
  hyperlinkOrPicture?: HyperlinkOrPictureColumn;
  indexed?: boolean;
  isDeletable?: boolean;
  isReorderable?: boolean;
  isSealed?: boolean;
  lookup?: LookupColumn;
  name?: string;
  number?: NumberColumn;
  personOrGroup?: PersonOrGroupColumn;
  propagateChanges?: boolean;
  readOnly?: boolean;
  required?: boolean;
  sourceContentType?: ContentTypeInfo;
  term?: TermColumn;
  text?: TextColumn;
  thumbnail?: ThumbnailColumn;
  type?:
    | "NOTE"
    | "TEXT"
    | "CHOICE"
    | "MULTICHOICE"
    | "NUMBER"
    | "CURRENCY"
    | "DATE_TIME"
    | "LOOKUP"
    | "BOOLEAN"
    | "USER"
    | "URL"
    | "CALCULATED"
    | "LOCATION"
    | "GEOLOCATION"
    | "TERM"
    | "MULTITERM"
    | "THUMBNAIL"
    | "APPROVAL_STATUS"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  validation?: ColumnValidation;
  sourceColumn?: ColumnDefinition;
}

export interface ColumnDefinitionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ColumnDefinitionCollectionRequestBuilder;
  currentPage?: ColumnDefinition[];
}

export interface ColumnDefinitionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ColumnLink {
  oDataType?: string;
  id?: string;
  name?: string;
}

export interface ColumnLinkCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ColumnLinkCollectionRequestBuilder;
  currentPage?: ColumnLink[];
}

export interface ColumnLinkCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ColumnValidation {
  oDataType?: string;
  defaultLanguage?: string;
  descriptions?: DisplayNameLocalization[];
  formula?: string;
}

export interface ConfigurationManagerClientEnabledFeatures {
  oDataType?: string;
  compliancePolicy?: boolean;
  deviceConfiguration?: boolean;
  inventory?: boolean;
  modernApps?: boolean;
  resourceAccess?: boolean;
  windowsUpdateForBusiness?: boolean;
}

export interface Contact {
  oDataType?: string;
  id?: string;
  categories?: string[];
  changeKey?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  assistantName?: string;
  /** @format date-time */
  birthday?: string;
  businessAddress?: PhysicalAddress;
  businessHomePage?: string;
  businessPhones?: string[];
  children?: string[];
  companyName?: string;
  department?: string;
  displayName?: string;
  emailAddresses?: EmailAddress[];
  fileAs?: string;
  generation?: string;
  givenName?: string;
  homeAddress?: PhysicalAddress;
  homePhones?: string[];
  imAddresses?: string[];
  initials?: string;
  jobTitle?: string;
  manager?: string;
  middleName?: string;
  mobilePhone?: string;
  nickName?: string;
  officeLocation?: string;
  otherAddress?: PhysicalAddress;
  parentFolderId?: string;
  personalNotes?: string;
  profession?: string;
  spouseName?: string;
  surname?: string;
  title?: string;
  yomiCompanyName?: string;
  yomiGivenName?: string;
  yomiSurname?: string;
  extensions?: ExtensionCollectionPage;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  photo?: ProfilePhoto;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface ContactCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ContactCollectionRequestBuilder;
  currentPage?: Contact[];
}

export interface ContactCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ContactFolder {
  oDataType?: string;
  id?: string;
  displayName?: string;
  parentFolderId?: string;
  childFolders?: ContactFolderCollectionPage;
  contacts?: ContactCollectionPage;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface ContactFolderCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ContactFolderCollectionRequestBuilder;
  currentPage?: ContactFolder[];
}

export interface ContactFolderCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ContentApprovalStatusColumn {
  oDataType?: string;
}

export interface ContentType {
  oDataType?: string;
  id?: string;
  associatedHubsUrls?: string[];
  description?: string;
  documentSet?: DocumentSet;
  documentTemplate?: DocumentSetContent;
  group?: string;
  hidden?: boolean;
  inheritedFrom?: ItemReference;
  isBuiltIn?: boolean;
  name?: string;
  order?: ContentTypeOrder;
  parentId?: string;
  propagateChanges?: boolean;
  readOnly?: boolean;
  sealed?: boolean;
  base?: ContentType;
  baseTypes?: ContentTypeCollectionPage;
  columnLinks?: ColumnLinkCollectionPage;
  columnPositions?: ColumnDefinitionCollectionPage;
  columns?: ColumnDefinitionCollectionPage;
}

export interface ContentTypeCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ContentTypeCollectionRequestBuilder;
  currentPage?: ContentType[];
}

export interface ContentTypeCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
  compatibleHubContentTypes?: ContentTypeGetCompatibleHubContentTypesCollectionRequestBuilder;
}

export interface ContentTypeGetCompatibleHubContentTypesCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ContentTypeInfo {
  oDataType?: string;
  id?: string;
  name?: string;
}

export interface ContentTypeOrder {
  oDataType?: string;
  msgraphDefault?: boolean;
  /** @format int32 */
  position?: number;
}

export interface Conversation {
  oDataType?: string;
  id?: string;
  hasAttachments?: boolean;
  /** @format date-time */
  lastDeliveredDateTime?: string;
  preview?: string;
  topic?: string;
  uniqueSenders?: string[];
  threads?: ConversationThreadCollectionPage;
}

export interface ConversationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ConversationCollectionRequestBuilder;
  currentPage?: Conversation[];
}

export interface ConversationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ConversationMember {
  oDataType?: string;
  id?: string;
  displayName?: string;
  roles?: string[];
  /** @format date-time */
  visibleHistoryStartDateTime?: string;
}

export interface ConversationMemberCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ConversationMemberCollectionRequestBuilder;
  currentPage?: ConversationMember[];
}

export interface ConversationMemberCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ConversationThread {
  oDataType?: string;
  id?: string;
  ccRecipients?: Recipient[];
  hasAttachments?: boolean;
  isLocked?: boolean;
  /** @format date-time */
  lastDeliveredDateTime?: string;
  preview?: string;
  topic?: string;
  toRecipients?: Recipient[];
  uniqueSenders?: string[];
  posts?: PostCollectionPage;
}

export interface ConversationThreadCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ConversationThreadCollectionRequestBuilder;
  currentPage?: ConversationThread[];
}

export interface ConversationThreadCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface CurrencyColumn {
  oDataType?: string;
  locale?: string;
}

export interface CustomSecurityAttributeValue {
  oDataType?: string;
}

export interface DateOnly {
  /** @format int32 */
  year?: number;
  /** @format int32 */
  month?: number;
  /** @format int32 */
  day?: number;
}

export interface DateTimeColumn {
  oDataType?: string;
  displayAs?: string;
  format?: string;
}

export interface DateTimeTimeZone {
  oDataType?: string;
  dateTime?: string;
  timeZone?: string;
}

export interface DefaultColumnValue {
  oDataType?: string;
  formula?: string;
  value?: string;
}

export interface Deleted {
  oDataType?: string;
  state?: string;
}

export interface Device {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  deletedDateTime?: string;
  accountEnabled?: boolean;
  alternativeSecurityIds?: AlternativeSecurityId[];
  /** @format date-time */
  approximateLastSignInDateTime?: string;
  /** @format date-time */
  complianceExpirationDateTime?: string;
  deviceCategory?: string;
  deviceId?: string;
  deviceMetadata?: string;
  deviceOwnership?: string;
  /** @format int32 */
  deviceVersion?: number;
  displayName?: string;
  enrollmentProfileName?: string;
  isCompliant?: boolean;
  isManaged?: boolean;
  mdmAppId?: string;
  /** @format date-time */
  onPremisesLastSyncDateTime?: string;
  onPremisesSyncEnabled?: boolean;
  operatingSystem?: string;
  operatingSystemVersion?: string;
  physicalIds?: string[];
  profileType?: string;
  /** @format date-time */
  registrationDateTime?: string;
  systemLabels?: string[];
  trustType?: string;
  memberOf?: DirectoryObjectCollectionPage;
  registeredOwners?: DirectoryObjectCollectionPage;
  registeredUsers?: DirectoryObjectCollectionPage;
  transitiveMemberOf?: DirectoryObjectCollectionPage;
  extensions?: ExtensionCollectionPage;
}

export interface DeviceActionResult {
  oDataType?: string;
  actionName?: string;
  actionState?: "NONE" | "PENDING" | "CANCELED" | "ACTIVE" | "DONE" | "FAILED" | "NOT_SUPPORTED" | "UNEXPECTED_VALUE";
  /** @format date-time */
  lastUpdatedDateTime?: string;
  /** @format date-time */
  startDateTime?: string;
}

export interface DeviceCategory {
  oDataType?: string;
  id?: string;
  description?: string;
  displayName?: string;
}

export interface DeviceCompliancePolicySettingState {
  oDataType?: string;
  currentValue?: string;
  /** @format int64 */
  errorCode?: number;
  errorDescription?: string;
  instanceDisplayName?: string;
  setting?: string;
  settingName?: string;
  sources?: SettingSource[];
  state?:
    | "UNKNOWN"
    | "NOT_APPLICABLE"
    | "COMPLIANT"
    | "REMEDIATED"
    | "NON_COMPLIANT"
    | "ERROR"
    | "CONFLICT"
    | "NOT_ASSIGNED"
    | "UNEXPECTED_VALUE";
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPrincipalName?: string;
}

export interface DeviceCompliancePolicyState {
  oDataType?: string;
  id?: string;
  displayName?: string;
  platformType?:
    | "ANDROID"
    | "ANDROID_FOR_WORK"
    | "I_OS"
    | "MAC_OS"
    | "WINDOWS_PHONE81"
    | "WINDOWS81_AND_LATER"
    | "WINDOWS10_AND_LATER"
    | "ALL"
    | "UNEXPECTED_VALUE";
  /** @format int32 */
  settingCount?: number;
  settingStates?: DeviceCompliancePolicySettingState[];
  state?:
    | "UNKNOWN"
    | "NOT_APPLICABLE"
    | "COMPLIANT"
    | "REMEDIATED"
    | "NON_COMPLIANT"
    | "ERROR"
    | "CONFLICT"
    | "NOT_ASSIGNED"
    | "UNEXPECTED_VALUE";
  /** @format int32 */
  version?: number;
}

export interface DeviceCompliancePolicyStateCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DeviceCompliancePolicyStateCollectionRequestBuilder;
  currentPage?: DeviceCompliancePolicyState[];
}

export interface DeviceCompliancePolicyStateCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DeviceConfigurationSettingState {
  oDataType?: string;
  currentValue?: string;
  /** @format int64 */
  errorCode?: number;
  errorDescription?: string;
  instanceDisplayName?: string;
  setting?: string;
  settingName?: string;
  sources?: SettingSource[];
  state?:
    | "UNKNOWN"
    | "NOT_APPLICABLE"
    | "COMPLIANT"
    | "REMEDIATED"
    | "NON_COMPLIANT"
    | "ERROR"
    | "CONFLICT"
    | "NOT_ASSIGNED"
    | "UNEXPECTED_VALUE";
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPrincipalName?: string;
}

export interface DeviceConfigurationState {
  oDataType?: string;
  id?: string;
  displayName?: string;
  platformType?:
    | "ANDROID"
    | "ANDROID_FOR_WORK"
    | "I_OS"
    | "MAC_OS"
    | "WINDOWS_PHONE81"
    | "WINDOWS81_AND_LATER"
    | "WINDOWS10_AND_LATER"
    | "ALL"
    | "UNEXPECTED_VALUE";
  /** @format int32 */
  settingCount?: number;
  settingStates?: DeviceConfigurationSettingState[];
  state?:
    | "UNKNOWN"
    | "NOT_APPLICABLE"
    | "COMPLIANT"
    | "REMEDIATED"
    | "NON_COMPLIANT"
    | "ERROR"
    | "CONFLICT"
    | "NOT_ASSIGNED"
    | "UNEXPECTED_VALUE";
  /** @format int32 */
  version?: number;
}

export interface DeviceConfigurationStateCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DeviceConfigurationStateCollectionRequestBuilder;
  currentPage?: DeviceConfigurationState[];
}

export interface DeviceConfigurationStateCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DeviceHealthAttestationState {
  oDataType?: string;
  attestationIdentityKey?: string;
  bitLockerStatus?: string;
  bootAppSecurityVersion?: string;
  bootDebugging?: string;
  bootManagerSecurityVersion?: string;
  bootManagerVersion?: string;
  bootRevisionListInfo?: string;
  codeIntegrity?: string;
  codeIntegrityCheckVersion?: string;
  codeIntegrityPolicy?: string;
  contentNamespaceUrl?: string;
  contentVersion?: string;
  dataExcutionPolicy?: string;
  deviceHealthAttestationStatus?: string;
  earlyLaunchAntiMalwareDriverProtection?: string;
  healthAttestationSupportedStatus?: string;
  healthStatusMismatchInfo?: string;
  /** @format date-time */
  issuedDateTime?: string;
  lastUpdateDateTime?: string;
  operatingSystemKernelDebugging?: string;
  operatingSystemRevListInfo?: string;
  pcr0?: string;
  pcrHashAlgorithm?: string;
  /** @format int64 */
  resetCount?: number;
  /** @format int64 */
  restartCount?: number;
  safeMode?: string;
  secureBoot?: string;
  secureBootConfigurationPolicyFingerPrint?: string;
  testSigning?: string;
  tpmVersion?: string;
  virtualSecureMode?: string;
  windowsPE?: string;
}

export interface DeviceLogCollectionResponse {
  oDataType?: string;
  id?: string;
  enrolledByUser?: string;
  /** @format date-time */
  expirationDateTimeUTC?: string;
  initiatedByUserPrincipalName?: string;
  /** @format uuid */
  managedDeviceId?: string;
  /** @format date-time */
  receivedDateTimeUTC?: string;
  /** @format date-time */
  requestedDateTimeUTC?: string;
  /** @format double */
  sizeInKB?: number;
  status?: "PENDING" | "COMPLETED" | "FAILED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface DeviceLogCollectionResponseCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DeviceLogCollectionResponseCollectionRequestBuilder;
  currentPage?: DeviceLogCollectionResponse[];
}

export interface DeviceLogCollectionResponseCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DeviceManagementTroubleshootingEvent {
  oDataType?: string;
  id?: string;
  correlationId?: string;
  /** @format date-time */
  eventDateTime?: string;
}

export interface DeviceManagementTroubleshootingEventCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DeviceManagementTroubleshootingEventCollectionRequestBuilder;
  currentPage?: DeviceManagementTroubleshootingEvent[];
}

export interface DeviceManagementTroubleshootingEventCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DirectoryObject {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  deletedDateTime?: string;
}

export interface DirectoryObjectCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DirectoryObjectCollectionRequestBuilder;
  currentPage?: DirectoryObject[];
}

export interface DirectoryObjectCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DisplayNameLocalization {
  oDataType?: string;
  displayName?: string;
  languageTag?: string;
}

export interface DocumentSet {
  oDataType?: string;
  allowedContentTypes?: ContentTypeInfo[];
  defaultContents?: DocumentSetContent[];
  propagateWelcomePageChanges?: boolean;
  shouldPrefixNameToFile?: boolean;
  welcomePageUrl?: string;
  sharedColumns?: ColumnDefinitionCollectionPage;
  welcomePageColumns?: ColumnDefinitionCollectionPage;
}

export interface DocumentSetContent {
  oDataType?: string;
  contentType?: ContentTypeInfo;
  fileName?: string;
  folderName?: string;
}

export interface DocumentSetVersion {
  oDataType?: string;
  id?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  publication?: PublicationFacet;
  fields?: FieldValueSet;
  comment?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  items?: DocumentSetVersionItem[];
  shouldCaptureMinorVersion?: boolean;
}

export interface DocumentSetVersionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DocumentSetVersionCollectionRequestBuilder;
  currentPage?: DocumentSetVersion[];
}

export interface DocumentSetVersionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DocumentSetVersionItem {
  oDataType?: string;
  itemId?: string;
  title?: string;
  versionId?: string;
}

export interface Drive {
  oDataType?: string;
  id?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  driveType?: string;
  owner?: IdentitySet;
  quota?: Quota;
  sharePointIds?: SharepointIds;
  system?: SystemFacet;
  bundles?: DriveItemCollectionPage;
  following?: DriveItemCollectionPage;
  items?: DriveItemCollectionPage;
  list?: List;
  root?: DriveItem;
  special?: DriveItemCollectionPage;
}

export interface DriveCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DriveCollectionRequestBuilder;
  currentPage?: Drive[];
}

export interface DriveCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DriveItem {
  oDataType?: string;
  id?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  audio?: Audio;
  bundle?: Bundle;
  cTag?: string;
  deleted?: Deleted;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  image?: Image;
  location?: GeoCoordinates;
  malware?: Malware;
  msgraphPackage?: Package;
  pendingOperations?: PendingOperations;
  photo?: Photo;
  publication?: PublicationFacet;
  remoteItem?: RemoteItem;
  root?: Root;
  searchResult?: SearchResult;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  /** @format int64 */
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  workbook?: Workbook;
  analytics?: ItemAnalytics;
  children?: DriveItemCollectionPage;
  listItem?: ListItem;
  permissions?: PermissionCollectionPage;
  retentionLabel?: ItemRetentionLabel;
  subscriptions?: SubscriptionCollectionPage;
  thumbnails?: ThumbnailSetCollectionPage;
  versions?: DriveItemVersionCollectionPage;
}

export interface DriveItemCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DriveItemCollectionRequestBuilder;
  currentPage?: DriveItem[];
}

export interface DriveItemCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface DriveItemVersion {
  oDataType?: string;
  id?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  publication?: PublicationFacet;
  /** @format int64 */
  size?: number;
}

export interface DriveItemVersionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: DriveItemVersionCollectionRequestBuilder;
  currentPage?: DriveItemVersion[];
}

export interface DriveItemVersionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface EmailAddress {
  oDataType?: string;
  address?: string;
  name?: string;
}

export interface EmailAuthenticationMethod {
  oDataType?: string;
  id?: string;
  emailAddress?: string;
}

export interface EmailAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: EmailAuthenticationMethodCollectionRequestBuilder;
  currentPage?: EmailAuthenticationMethod[];
}

export interface EmailAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface EmployeeExperienceUser {
  oDataType?: string;
  id?: string;
  learningCourseActivities?: LearningCourseActivityCollectionPage;
}

export interface EmployeeOrgData {
  oDataType?: string;
  costCenter?: string;
  division?: string;
}

export interface Entity {
  oDataType?: string;
  id?: string;
}

export interface Event {
  oDataType?: string;
  id?: string;
  categories?: string[];
  changeKey?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  allowNewTimeProposals?: boolean;
  attendees?: Attendee[];
  body?: ItemBody;
  bodyPreview?: string;
  end?: DateTimeTimeZone;
  hasAttachments?: boolean;
  hideAttendees?: boolean;
  iCalUId?: string;
  importance?: "LOW" | "NORMAL" | "HIGH" | "UNEXPECTED_VALUE";
  isAllDay?: boolean;
  isCancelled?: boolean;
  isDraft?: boolean;
  isOnlineMeeting?: boolean;
  isOrganizer?: boolean;
  isReminderOn?: boolean;
  location?: Location;
  locations?: Location[];
  onlineMeeting?: OnlineMeetingInfo;
  onlineMeetingProvider?:
    | "UNKNOWN"
    | "SKYPE_FOR_BUSINESS"
    | "SKYPE_FOR_CONSUMER"
    | "TEAMS_FOR_BUSINESS"
    | "UNEXPECTED_VALUE";
  onlineMeetingUrl?: string;
  organizer?: Recipient;
  originalEndTimeZone?: string;
  /** @format date-time */
  originalStart?: string;
  originalStartTimeZone?: string;
  recurrence?: PatternedRecurrence;
  /** @format int32 */
  reminderMinutesBeforeStart?: number;
  responseRequested?: boolean;
  responseStatus?: ResponseStatus;
  sensitivity?: "NORMAL" | "PERSONAL" | "PRIVATE" | "CONFIDENTIAL" | "UNEXPECTED_VALUE";
  seriesMasterId?: string;
  showAs?: "UNKNOWN" | "FREE" | "TENTATIVE" | "BUSY" | "OOF" | "WORKING_ELSEWHERE" | "UNEXPECTED_VALUE";
  start?: DateTimeTimeZone;
  subject?: string;
  transactionId?: string;
  type?: "SINGLE_INSTANCE" | "OCCURRENCE" | "EXCEPTION" | "SERIES_MASTER" | "UNEXPECTED_VALUE";
  webLink?: string;
  attachments?: AttachmentCollectionPage;
  calendar?: Calendar;
  extensions?: ExtensionCollectionPage;
  instances?: EventCollectionPage;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface EventCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: EventCollectionRequestBuilder;
  currentPage?: Event[];
}

export interface EventCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface EventMessageDetail {
  oDataType?: string;
}

export interface Extension {
  oDataType?: string;
  id?: string;
}

export interface ExtensionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ExtensionCollectionRequestBuilder;
  currentPage?: Extension[];
}

export interface ExtensionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ExternalLink {
  oDataType?: string;
  href?: string;
}

export interface Fido2AuthenticationMethod {
  oDataType?: string;
  id?: string;
  aaGuid?: string;
  attestationCertificates?: string[];
  attestationLevel?: "ATTESTED" | "NOT_ATTESTED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  createdDateTime?: string;
  displayName?: string;
  model?: string;
}

export interface Fido2AuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: Fido2AuthenticationMethodCollectionRequestBuilder;
  currentPage?: Fido2AuthenticationMethod[];
}

export interface Fido2AuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface FieldValueSet {
  oDataType?: string;
  id?: string;
}

export interface File {
  oDataType?: string;
  hashes?: Hashes;
  mimeType?: string;
  processingMetadata?: boolean;
}

export interface FileSystemInfo {
  oDataType?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastAccessedDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
}

export interface Folder {
  oDataType?: string;
  /** @format int32 */
  childCount?: number;
  view?: FolderView;
}

export interface FolderView {
  oDataType?: string;
  sortBy?: string;
  sortOrder?: string;
  viewType?: string;
}

export interface FollowupFlag {
  oDataType?: string;
  completedDateTime?: DateTimeTimeZone;
  dueDateTime?: DateTimeTimeZone;
  flagStatus?: "NOT_FLAGGED" | "COMPLETE" | "FLAGGED" | "UNEXPECTED_VALUE";
  startDateTime?: DateTimeTimeZone;
}

export interface GeoCoordinates {
  oDataType?: string;
  /** @format double */
  altitude?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface GeolocationColumn {
  oDataType?: string;
}

export interface Group {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  deletedDateTime?: string;
  assignedLabels?: AssignedLabel[];
  assignedLicenses?: AssignedLicense[];
  classification?: string;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  /** @format date-time */
  expirationDateTime?: string;
  groupTypes?: string[];
  hasMembersWithLicenseErrors?: boolean;
  isAssignableToRole?: boolean;
  licenseProcessingState?: LicenseProcessingState;
  mail?: string;
  mailEnabled?: boolean;
  mailNickname?: string;
  membershipRule?: string;
  membershipRuleProcessingState?: string;
  onPremisesDomainName?: string;
  /** @format date-time */
  onPremisesLastSyncDateTime?: string;
  onPremisesNetBiosName?: string;
  onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
  onPremisesSamAccountName?: string;
  onPremisesSecurityIdentifier?: string;
  onPremisesSyncEnabled?: boolean;
  preferredDataLocation?: string;
  preferredLanguage?: string;
  proxyAddresses?: string[];
  /** @format date-time */
  renewedDateTime?: string;
  securityEnabled?: boolean;
  securityIdentifier?: string;
  serviceProvisioningErrors?: ServiceProvisioningError[];
  theme?: string;
  visibility?: string;
  allowExternalSenders?: boolean;
  autoSubscribeNewMembers?: boolean;
  hideFromAddressLists?: boolean;
  hideFromOutlookClients?: boolean;
  isSubscribedByMail?: boolean;
  /** @format int32 */
  unseenCount?: number;
  isArchived?: boolean;
  appRoleAssignments?: AppRoleAssignmentCollectionPage;
  createdOnBehalfOf?: DirectoryObject;
  memberOf?: DirectoryObjectCollectionPage;
  members?: DirectoryObjectCollectionPage;
  membersWithLicenseErrors?: DirectoryObjectCollectionPage;
  owners?: DirectoryObjectCollectionPage;
  permissionGrants?: ResourceSpecificPermissionGrantCollectionPage;
  settings?: GroupSettingCollectionPage;
  transitiveMemberOf?: DirectoryObjectCollectionPage;
  transitiveMembers?: DirectoryObjectCollectionPage;
  acceptedSenders?: DirectoryObjectCollectionPage;
  calendar?: Calendar;
  calendarView?: EventCollectionPage;
  conversations?: ConversationCollectionPage;
  events?: EventCollectionPage;
  rejectedSenders?: DirectoryObjectCollectionPage;
  threads?: ConversationThreadCollectionPage;
  drive?: Drive;
  drives?: DriveCollectionPage;
  sites?: SiteCollectionPage;
  extensions?: ExtensionCollectionPage;
  groupLifecyclePolicies?: GroupLifecyclePolicyCollectionPage;
  planner?: PlannerGroup;
  onenote?: Onenote;
  photo?: ProfilePhoto;
  photos?: ProfilePhotoCollectionPage;
  team?: Team;
}

export interface GroupCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: GroupCollectionRequestBuilder;
  currentPage?: Group[];
}

export interface GroupCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface GroupLifecyclePolicy {
  oDataType?: string;
  id?: string;
  alternateNotificationEmails?: string;
  /** @format int32 */
  groupLifetimeInDays?: number;
  managedGroupTypes?: string;
}

export interface GroupLifecyclePolicyCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: GroupLifecyclePolicyCollectionRequestBuilder;
  currentPage?: GroupLifecyclePolicy[];
}

export interface GroupLifecyclePolicyCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface GroupSetting {
  oDataType?: string;
  id?: string;
  displayName?: string;
  templateId?: string;
  values?: SettingValue[];
}

export interface GroupSettingCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: GroupSettingCollectionRequestBuilder;
  currentPage?: GroupSetting[];
}

export interface GroupSettingCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Hashes {
  oDataType?: string;
  crc32Hash?: string;
  quickXorHash?: string;
  sha1Hash?: string;
  sha256Hash?: string;
}

export interface HyperlinkOrPictureColumn {
  oDataType?: string;
  isPicture?: boolean;
}

export interface IBaseClientObject {
  logger?: ILogger;
  serializer?: ISerializer;
  serviceSDKVersion?: string;
  serviceRoot?: string;
  httpProvider?: IHttpProviderObject;
}

export interface IHttpProviderObject {
  serializer?: ISerializer;
}

export interface ILogger {
  loggingLevel?: "ERROR" | "DEBUG";
}

export type ISerializer = object;

export interface Identity {
  oDataType?: string;
  displayName?: string;
  id?: string;
}

export interface IdentitySet {
  oDataType?: string;
  application?: Identity;
  device?: Identity;
  user?: Identity;
}

export interface Image {
  oDataType?: string;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  width?: number;
}

export interface ImageInfo {
  oDataType?: string;
  addImageQuery?: boolean;
  alternateText?: string;
  alternativeText?: string;
  iconUrl?: string;
}

export interface IncompleteData {
  oDataType?: string;
  /** @format date-time */
  missingDataBeforeDateTime?: string;
  wasThrottled?: boolean;
}

export interface InferenceClassification {
  oDataType?: string;
  id?: string;
  overrides?: InferenceClassificationOverrideCollectionPage;
}

export interface InferenceClassificationOverride {
  oDataType?: string;
  id?: string;
  classifyAs?: "FOCUSED" | "OTHER" | "UNEXPECTED_VALUE";
  senderEmailAddress?: EmailAddress;
}

export interface InferenceClassificationOverrideCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: InferenceClassificationOverrideCollectionRequestBuilder;
  currentPage?: InferenceClassificationOverride[];
}

export interface InferenceClassificationOverrideCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface InsightIdentity {
  oDataType?: string;
  address?: string;
  displayName?: string;
  id?: string;
}

export interface IntegerRange {
  oDataType?: string;
  /** @format int64 */
  end?: number;
  /** @format int64 */
  start?: number;
}

export interface InternetMessageHeader {
  oDataType?: string;
  name?: string;
  value?: string;
}

export interface ItemActionStat {
  oDataType?: string;
  /** @format int32 */
  actionCount?: number;
  /** @format int32 */
  actorCount?: number;
}

export interface ItemActivity {
  oDataType?: string;
  id?: string;
  access?: AccessAction;
  /** @format date-time */
  activityDateTime?: string;
  actor?: IdentitySet;
  driveItem?: DriveItem;
}

export interface ItemActivityCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ItemActivityCollectionRequestBuilder;
  currentPage?: ItemActivity[];
}

export interface ItemActivityCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ItemActivityStat {
  oDataType?: string;
  id?: string;
  access?: ItemActionStat;
  create?: ItemActionStat;
  delete?: ItemActionStat;
  edit?: ItemActionStat;
  /** @format date-time */
  endDateTime?: string;
  incompleteData?: IncompleteData;
  isTrending?: boolean;
  move?: ItemActionStat;
  /** @format date-time */
  startDateTime?: string;
  activities?: ItemActivityCollectionPage;
}

export interface ItemActivityStatCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ItemActivityStatCollectionRequestBuilder;
  currentPage?: ItemActivityStat[];
}

export interface ItemActivityStatCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ItemAnalytics {
  oDataType?: string;
  id?: string;
  allTime?: ItemActivityStat;
  itemActivityStats?: ItemActivityStatCollectionPage;
  lastSevenDays?: ItemActivityStat;
}

export interface ItemBody {
  oDataType?: string;
  content?: string;
  contentType?: "TEXT" | "HTML" | "UNEXPECTED_VALUE";
}

export interface ItemReference {
  oDataType?: string;
  driveId?: string;
  driveType?: string;
  id?: string;
  name?: string;
  path?: string;
  shareId?: string;
  sharepointIds?: SharepointIds;
  siteId?: string;
}

export interface ItemRetentionLabel {
  oDataType?: string;
  id?: string;
  isLabelAppliedExplicitly?: boolean;
  labelAppliedBy?: IdentitySet;
  /** @format date-time */
  labelAppliedDateTime?: string;
  name?: string;
  retentionSettings?: RetentionLabelSettings;
}

export interface JoinMeetingIdSettings {
  oDataType?: string;
  isPasscodeRequired?: boolean;
  joinMeetingId?: string;
  passcode?: string;
}

export interface JsonArray {
  empty?: boolean;
  /** @format int32 */
  asInt?: number;
  /** @format double */
  asDouble?: number;
  /** @format int64 */
  asLong?: number;
  asBoolean?: boolean;
  asString?: string;
  /** @deprecated */
  asCharacter?: string;
  asBigInteger?: number;
  /** @format float */
  asFloat?: number;
  /** @format byte */
  asByte?: string;
  asNumber?: number;
  /** @format int32 */
  asShort?: number;
  asBigDecimal?: number;
  jsonPrimitive?: boolean;
  asJsonPrimitive?: JsonPrimitive;
  jsonNull?: boolean;
  asJsonNull?: JsonNull;
  jsonObject?: boolean;
  jsonArray?: boolean;
  asJsonArray?: JsonArray;
  asJsonObject?: JsonObject;
}

export interface JsonElement {
  /** @format int32 */
  asInt?: number;
  /** @format double */
  asDouble?: number;
  /** @format int64 */
  asLong?: number;
  asBoolean?: boolean;
  asString?: string;
  jsonPrimitive?: boolean;
  /** @deprecated */
  asCharacter?: string;
  asBigInteger?: number;
  asJsonPrimitive?: JsonPrimitive;
  /** @format float */
  asFloat?: number;
  jsonNull?: boolean;
  asJsonNull?: JsonNull;
  jsonObject?: boolean;
  jsonArray?: boolean;
  /** @format byte */
  asByte?: string;
  asNumber?: number;
  /** @format int32 */
  asShort?: number;
  asBigDecimal?: number;
  asJsonArray?: JsonArray;
  asJsonObject?: JsonObject;
}

export interface JsonNull {
  /** @format int32 */
  asInt?: number;
  /** @format double */
  asDouble?: number;
  /** @format int64 */
  asLong?: number;
  asBoolean?: boolean;
  asString?: string;
  jsonPrimitive?: boolean;
  /** @deprecated */
  asCharacter?: string;
  asBigInteger?: number;
  asJsonPrimitive?: JsonPrimitive;
  /** @format float */
  asFloat?: number;
  jsonNull?: boolean;
  asJsonNull?: JsonNull;
  jsonObject?: boolean;
  jsonArray?: boolean;
  /** @format byte */
  asByte?: string;
  asNumber?: number;
  /** @format int32 */
  asShort?: number;
  asBigDecimal?: number;
  asJsonArray?: JsonArray;
  asJsonObject?: JsonObject;
}

export interface JsonObject {
  /** @format int32 */
  asInt?: number;
  /** @format double */
  asDouble?: number;
  /** @format int64 */
  asLong?: number;
  asBoolean?: boolean;
  asString?: string;
  jsonPrimitive?: boolean;
  /** @deprecated */
  asCharacter?: string;
  asBigInteger?: number;
  asJsonPrimitive?: JsonPrimitive;
  /** @format float */
  asFloat?: number;
  jsonNull?: boolean;
  asJsonNull?: JsonNull;
  jsonObject?: boolean;
  jsonArray?: boolean;
  /** @format byte */
  asByte?: string;
  asNumber?: number;
  /** @format int32 */
  asShort?: number;
  asBigDecimal?: number;
  asJsonArray?: JsonArray;
  asJsonObject?: JsonObject;
}

export interface JsonPrimitive {
  /** @format int32 */
  asInt?: number;
  /** @format double */
  asDouble?: number;
  /** @format int64 */
  asLong?: number;
  asBoolean?: boolean;
  asString?: string;
  number?: boolean;
  boolean?: boolean;
  /** @deprecated */
  asCharacter?: string;
  asBigInteger?: number;
  /** @format float */
  asFloat?: number;
  string?: boolean;
  /** @format byte */
  asByte?: string;
  asNumber?: number;
  /** @format int32 */
  asShort?: number;
  asBigDecimal?: number;
  jsonPrimitive?: boolean;
  asJsonPrimitive?: JsonPrimitive;
  jsonNull?: boolean;
  asJsonNull?: JsonNull;
  jsonObject?: boolean;
  jsonArray?: boolean;
  asJsonArray?: JsonArray;
  asJsonObject?: JsonObject;
}

export interface KeyValue {
  oDataType?: string;
  key?: string;
  value?: string;
}

export interface LearningCourseActivity {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  completedDateTime?: string;
  /** @format int32 */
  completionPercentage?: number;
  externalcourseActivityId?: string;
  learnerUserId?: string;
  learningContentId?: string;
  learningProviderId?: string;
  status?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface LearningCourseActivityCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: LearningCourseActivityCollectionRequestBuilder;
  currentPage?: LearningCourseActivity[];
}

export interface LearningCourseActivityCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface LicenseAssignmentState {
  oDataType?: string;
  assignedByGroup?: string;
  disabledPlans?: string[];
  error?: string;
  /** @format date-time */
  lastUpdatedDateTime?: string;
  /** @format uuid */
  skuId?: string;
  state?: string;
}

export interface LicenseDetails {
  oDataType?: string;
  id?: string;
  servicePlans?: ServicePlanInfo[];
  /** @format uuid */
  skuId?: string;
  skuPartNumber?: string;
}

export interface LicenseDetailsCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: LicenseDetailsCollectionRequestBuilder;
  currentPage?: LicenseDetails[];
}

export interface LicenseDetailsCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface LicenseProcessingState {
  oDataType?: string;
  state?: string;
}

export interface LinkedResource {
  oDataType?: string;
  id?: string;
  applicationName?: string;
  displayName?: string;
  externalId?: string;
  webUrl?: string;
}

export interface LinkedResourceCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: LinkedResourceCollectionRequestBuilder;
  currentPage?: LinkedResource[];
}

export interface LinkedResourceCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface List {
  oDataType?: string;
  id?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  displayName?: string;
  list?: ListInfo;
  sharepointIds?: SharepointIds;
  system?: SystemFacet;
  columns?: ColumnDefinitionCollectionPage;
  contentTypes?: ContentTypeCollectionPage;
  drive?: Drive;
  items?: ListItemCollectionPage;
  operations?: RichLongRunningOperationCollectionPage;
  subscriptions?: SubscriptionCollectionPage;
}

export interface ListCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ListCollectionRequestBuilder;
  currentPage?: List[];
}

export interface ListCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ListInfo {
  oDataType?: string;
  contentTypesEnabled?: boolean;
  hidden?: boolean;
  template?: string;
}

export interface ListItem {
  oDataType?: string;
  id?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  contentType?: ContentTypeInfo;
  sharepointIds?: SharepointIds;
  analytics?: ItemAnalytics;
  documentSetVersions?: DocumentSetVersionCollectionPage;
  driveItem?: DriveItem;
  fields?: FieldValueSet;
  versions?: ListItemVersionCollectionPage;
}

export interface ListItemCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ListItemCollectionRequestBuilder;
  currentPage?: ListItem[];
}

export interface ListItemCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ListItemVersion {
  oDataType?: string;
  id?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  publication?: PublicationFacet;
  fields?: FieldValueSet;
}

export interface ListItemVersionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ListItemVersionCollectionRequestBuilder;
  currentPage?: ListItemVersion[];
}

export interface ListItemVersionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface LobbyBypassSettings {
  oDataType?: string;
  isDialInBypassEnabled?: boolean;
  scope?:
    | "ORGANIZER"
    | "ORGANIZATION"
    | "ORGANIZATION_AND_FEDERATED"
    | "EVERYONE"
    | "UNKNOWN_FUTURE_VALUE"
    | "INVITED"
    | "ORGANIZATION_EXCLUDING_GUESTS"
    | "UNEXPECTED_VALUE";
}

export interface LocaleInfo {
  oDataType?: string;
  displayName?: string;
  locale?: string;
}

export interface LocalizedDescription {
  oDataType?: string;
  description?: string;
  languageTag?: string;
}

export interface LocalizedLabel {
  oDataType?: string;
  isDefault?: boolean;
  languageTag?: string;
  name?: string;
}

export interface LocalizedName {
  oDataType?: string;
  languageTag?: string;
  name?: string;
}

export interface Location {
  oDataType?: string;
  address?: PhysicalAddress;
  coordinates?: OutlookGeoCoordinates;
  displayName?: string;
  locationEmailAddress?: string;
  locationType?:
    | "DEFAULT"
    | "CONFERENCE_ROOM"
    | "HOME_ADDRESS"
    | "BUSINESS_ADDRESS"
    | "GEO_COORDINATES"
    | "STREET_ADDRESS"
    | "HOTEL"
    | "RESTAURANT"
    | "LOCAL_BUSINESS"
    | "POSTAL_ADDRESS"
    | "UNEXPECTED_VALUE";
  locationUri?: string;
  uniqueId?: string;
  uniqueIdType?: "UNKNOWN" | "LOCATION_STORE" | "DIRECTORY" | "PRIVATE" | "BING" | "UNEXPECTED_VALUE";
}

export interface LongRunningOperation {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastActionDateTime?: string;
  resourceLocation?: string;
  status?: "NOT_STARTED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  statusDetail?: string;
}

export interface LongRunningOperationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: LongRunningOperationCollectionRequestBuilder;
  currentPage?: LongRunningOperation[];
}

export interface LongRunningOperationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface LookupColumn {
  oDataType?: string;
  allowMultipleValues?: boolean;
  allowUnlimitedLength?: boolean;
  columnName?: string;
  listId?: string;
  primaryLookupColumnId?: string;
}

export interface MailFolder {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  childFolderCount?: number;
  displayName?: string;
  isHidden?: boolean;
  parentFolderId?: string;
  /** @format int32 */
  totalItemCount?: number;
  /** @format int32 */
  unreadItemCount?: number;
  childFolders?: MailFolderCollectionPage;
  messageRules?: MessageRuleCollectionPage;
  messages?: MessageCollectionPage;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface MailFolderCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: MailFolderCollectionRequestBuilder;
  currentPage?: MailFolder[];
}

export interface MailFolderCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface MailboxSettings {
  oDataType?: string;
  archiveFolder?: string;
  automaticRepliesSetting?: AutomaticRepliesSetting;
  dateFormat?: string;
  delegateMeetingMessageDeliveryOptions?:
    | "SEND_TO_DELEGATE_AND_INFORMATION_TO_PRINCIPAL"
    | "SEND_TO_DELEGATE_AND_PRINCIPAL"
    | "SEND_TO_DELEGATE_ONLY"
    | "UNEXPECTED_VALUE";
  language?: LocaleInfo;
  timeFormat?: string;
  timeZone?: string;
  userPurpose?:
    | "USER"
    | "LINKED"
    | "SHARED"
    | "ROOM"
    | "EQUIPMENT"
    | "OTHERS"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  workingHours?: WorkingHours;
}

export interface Malware {
  oDataType?: string;
  description?: string;
}

export interface ManagedAppOperation {
  oDataType?: string;
  id?: string;
  displayName?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  state?: string;
  version?: string;
}

export interface ManagedAppOperationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ManagedAppOperationCollectionRequestBuilder;
  currentPage?: ManagedAppOperation[];
}

export interface ManagedAppOperationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ManagedAppPolicy {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  version?: string;
}

export interface ManagedAppPolicyCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ManagedAppPolicyCollectionRequestBuilder;
  currentPage?: ManagedAppPolicy[];
}

export interface ManagedAppPolicyCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ManagedAppRegistration {
  oDataType?: string;
  id?: string;
  appIdentifier?: MobileAppIdentifier;
  applicationVersion?: string;
  /** @format date-time */
  createdDateTime?: string;
  deviceName?: string;
  deviceTag?: string;
  deviceType?: string;
  flaggedReasons?: ("NONE" | "ROOTED_DEVICE" | "UNEXPECTED_VALUE")[];
  /** @format date-time */
  lastSyncDateTime?: string;
  managementSdkVersion?: string;
  platformVersion?: string;
  userId?: string;
  version?: string;
  appliedPolicies?: ManagedAppPolicyCollectionPage;
  intendedPolicies?: ManagedAppPolicyCollectionPage;
  operations?: ManagedAppOperationCollectionPage;
}

export interface ManagedAppRegistrationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ManagedAppRegistrationCollectionRequestBuilder;
  currentPage?: ManagedAppRegistration[];
}

export interface ManagedAppRegistrationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
  userIdsWithFlaggedAppRegistration?: ManagedAppRegistrationGetUserIdsWithFlaggedAppRegistrationCollectionRequestBuilder;
}

export interface ManagedAppRegistrationGetUserIdsWithFlaggedAppRegistrationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ManagedDevice {
  oDataType?: string;
  id?: string;
  activationLockBypassCode?: string;
  androidSecurityPatchLevel?: string;
  azureADDeviceId?: string;
  azureADRegistered?: boolean;
  /** @format date-time */
  complianceGracePeriodExpirationDateTime?: string;
  complianceState?:
    | "UNKNOWN"
    | "COMPLIANT"
    | "NONCOMPLIANT"
    | "CONFLICT"
    | "ERROR"
    | "IN_GRACE_PERIOD"
    | "CONFIG_MANAGER"
    | "UNEXPECTED_VALUE";
  configurationManagerClientEnabledFeatures?: ConfigurationManagerClientEnabledFeatures;
  deviceActionResults?: DeviceActionResult[];
  deviceCategoryDisplayName?: string;
  deviceEnrollmentType?:
    | "UNKNOWN"
    | "USER_ENROLLMENT"
    | "DEVICE_ENROLLMENT_MANAGER"
    | "APPLE_BULK_WITH_USER"
    | "APPLE_BULK_WITHOUT_USER"
    | "WINDOWS_AZURE_AD_JOIN"
    | "WINDOWS_BULK_USERLESS"
    | "WINDOWS_AUTO_ENROLLMENT"
    | "WINDOWS_BULK_AZURE_DOMAIN_JOIN"
    | "WINDOWS_CO_MANAGEMENT"
    | "WINDOWS_AZURE_AD_JOIN_USING_DEVICE_AUTH"
    | "APPLE_USER_ENROLLMENT"
    | "APPLE_USER_ENROLLMENT_WITH_SERVICE_ACCOUNT"
    | "UNEXPECTED_VALUE";
  deviceHealthAttestationState?: DeviceHealthAttestationState;
  deviceName?: string;
  deviceRegistrationState?:
    | "NOT_REGISTERED"
    | "REGISTERED"
    | "REVOKED"
    | "KEY_CONFLICT"
    | "APPROVAL_PENDING"
    | "CERTIFICATE_RESET"
    | "NOT_REGISTERED_PENDING_ENROLLMENT"
    | "UNKNOWN"
    | "UNEXPECTED_VALUE";
  easActivated?: boolean;
  /** @format date-time */
  easActivationDateTime?: string;
  easDeviceId?: string;
  emailAddress?: string;
  /** @format date-time */
  enrolledDateTime?: string;
  ethernetMacAddress?: string;
  exchangeAccessState?: "NONE" | "UNKNOWN" | "ALLOWED" | "BLOCKED" | "QUARANTINED" | "UNEXPECTED_VALUE";
  exchangeAccessStateReason?:
    | "NONE"
    | "UNKNOWN"
    | "EXCHANGE_GLOBAL_RULE"
    | "EXCHANGE_INDIVIDUAL_RULE"
    | "EXCHANGE_DEVICE_RULE"
    | "EXCHANGE_UPGRADE"
    | "EXCHANGE_MAILBOX_POLICY"
    | "OTHER"
    | "COMPLIANT"
    | "NOT_COMPLIANT"
    | "NOT_ENROLLED"
    | "UNKNOWN_LOCATION"
    | "MFA_REQUIRED"
    | "AZURE_AD_BLOCK_DUE_TO_ACCESS_POLICY"
    | "COMPROMISED_PASSWORD"
    | "DEVICE_NOT_KNOWN_WITH_MANAGED_APP"
    | "UNEXPECTED_VALUE";
  /** @format date-time */
  exchangeLastSuccessfulSyncDateTime?: string;
  /** @format int64 */
  freeStorageSpaceInBytes?: number;
  iccid?: string;
  imei?: string;
  isEncrypted?: boolean;
  isSupervised?: boolean;
  jailBroken?: string;
  /** @format date-time */
  lastSyncDateTime?: string;
  managedDeviceName?: string;
  managedDeviceOwnerType?: "UNKNOWN" | "COMPANY" | "PERSONAL" | "UNEXPECTED_VALUE";
  managementAgent?:
    | "EAS"
    | "MDM"
    | "EAS_MDM"
    | "INTUNE_CLIENT"
    | "EAS_INTUNE_CLIENT"
    | "CONFIGURATION_MANAGER_CLIENT"
    | "CONFIGURATION_MANAGER_CLIENT_MDM"
    | "CONFIGURATION_MANAGER_CLIENT_MDM_EAS"
    | "UNKNOWN"
    | "JAMF"
    | "GOOGLE_CLOUD_DEVICE_POLICY_CONTROLLER"
    | "MICROSOFT365_MANAGED_MDM"
    | "MS_SENSE"
    | "UNEXPECTED_VALUE";
  /** @format date-time */
  managementCertificateExpirationDate?: string;
  manufacturer?: string;
  meid?: string;
  model?: string;
  notes?: string;
  operatingSystem?: string;
  osVersion?: string;
  partnerReportedThreatState?:
    | "UNKNOWN"
    | "ACTIVATED"
    | "DEACTIVATED"
    | "SECURED"
    | "LOW_SEVERITY"
    | "MEDIUM_SEVERITY"
    | "HIGH_SEVERITY"
    | "UNRESPONSIVE"
    | "COMPROMISED"
    | "MISCONFIGURED"
    | "UNEXPECTED_VALUE";
  phoneNumber?: string;
  /** @format int64 */
  physicalMemoryInBytes?: number;
  remoteAssistanceSessionErrorDetails?: string;
  remoteAssistanceSessionUrl?: string;
  requireUserEnrollmentApproval?: boolean;
  serialNumber?: string;
  subscriberCarrier?: string;
  /** @format int64 */
  totalStorageSpaceInBytes?: number;
  udid?: string;
  userDisplayName?: string;
  userId?: string;
  userPrincipalName?: string;
  wiFiMacAddress?: string;
  deviceCompliancePolicyStates?: DeviceCompliancePolicyStateCollectionPage;
  deviceConfigurationStates?: DeviceConfigurationStateCollectionPage;
  deviceCategory?: DeviceCategory;
  logCollectionRequests?: DeviceLogCollectionResponseCollectionPage;
  users?: UserCollectionPage;
  windowsProtectionState?: WindowsProtectionState;
}

export interface ManagedDeviceCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ManagedDeviceCollectionRequestBuilder;
  currentPage?: ManagedDevice[];
}

export interface ManagedDeviceCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface MeetingAttendanceReport {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  meetingEndDateTime?: string;
  /** @format date-time */
  meetingStartDateTime?: string;
  /** @format int32 */
  totalParticipantCount?: number;
  attendanceRecords?: AttendanceRecordCollectionPage;
}

export interface MeetingAttendanceReportCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: MeetingAttendanceReportCollectionRequestBuilder;
  currentPage?: MeetingAttendanceReport[];
}

export interface MeetingAttendanceReportCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface MeetingParticipantInfo {
  oDataType?: string;
  identity?: IdentitySet;
  role?: "ATTENDEE" | "PRESENTER" | "UNKNOWN_FUTURE_VALUE" | "PRODUCER" | "COORGANIZER" | "UNEXPECTED_VALUE";
  upn?: string;
}

export interface MeetingParticipants {
  oDataType?: string;
  attendees?: MeetingParticipantInfo[];
  organizer?: MeetingParticipantInfo;
}

export interface Message {
  oDataType?: string;
  id?: string;
  categories?: string[];
  changeKey?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  bccRecipients?: Recipient[];
  body?: ItemBody;
  bodyPreview?: string;
  ccRecipients?: Recipient[];
  conversationId?: string;
  conversationIndex?: string[];
  flag?: FollowupFlag;
  from?: Recipient;
  hasAttachments?: boolean;
  importance?: "LOW" | "NORMAL" | "HIGH" | "UNEXPECTED_VALUE";
  inferenceClassification?: "FOCUSED" | "OTHER" | "UNEXPECTED_VALUE";
  internetMessageHeaders?: InternetMessageHeader[];
  internetMessageId?: string;
  isDeliveryReceiptRequested?: boolean;
  isDraft?: boolean;
  isRead?: boolean;
  isReadReceiptRequested?: boolean;
  parentFolderId?: string;
  /** @format date-time */
  receivedDateTime?: string;
  replyTo?: Recipient[];
  sender?: Recipient;
  /** @format date-time */
  sentDateTime?: string;
  subject?: string;
  toRecipients?: Recipient[];
  uniqueBody?: ItemBody;
  webLink?: string;
  attachments?: AttachmentCollectionPage;
  extensions?: ExtensionCollectionPage;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface MessageCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: MessageCollectionRequestBuilder;
  currentPage?: Message[];
}

export interface MessageCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface MessageRule {
  oDataType?: string;
  id?: string;
  actions?: MessageRuleActions;
  conditions?: MessageRulePredicates;
  displayName?: string;
  exceptions?: MessageRulePredicates;
  hasError?: boolean;
  isEnabled?: boolean;
  isReadOnly?: boolean;
  /** @format int32 */
  sequence?: number;
}

export interface MessageRuleActions {
  oDataType?: string;
  assignCategories?: string[];
  copyToFolder?: string;
  delete?: boolean;
  forwardAsAttachmentTo?: Recipient[];
  forwardTo?: Recipient[];
  markAsRead?: boolean;
  markImportance?: "LOW" | "NORMAL" | "HIGH" | "UNEXPECTED_VALUE";
  moveToFolder?: string;
  permanentDelete?: boolean;
  redirectTo?: Recipient[];
  stopProcessingRules?: boolean;
}

export interface MessageRuleCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: MessageRuleCollectionRequestBuilder;
  currentPage?: MessageRule[];
}

export interface MessageRuleCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface MessageRulePredicates {
  oDataType?: string;
  bodyContains?: string[];
  bodyOrSubjectContains?: string[];
  categories?: string[];
  fromAddresses?: Recipient[];
  hasAttachments?: boolean;
  headerContains?: string[];
  importance?: "LOW" | "NORMAL" | "HIGH" | "UNEXPECTED_VALUE";
  isApprovalRequest?: boolean;
  isAutomaticForward?: boolean;
  isAutomaticReply?: boolean;
  isEncrypted?: boolean;
  isMeetingRequest?: boolean;
  isMeetingResponse?: boolean;
  isNonDeliveryReport?: boolean;
  isPermissionControlled?: boolean;
  isReadReceipt?: boolean;
  isSigned?: boolean;
  isVoicemail?: boolean;
  messageActionFlag?:
    | "ANY"
    | "CALL"
    | "DO_NOT_FORWARD"
    | "FOLLOW_UP"
    | "FYI"
    | "FORWARD"
    | "NO_RESPONSE_NECESSARY"
    | "READ"
    | "REPLY"
    | "REPLY_TO_ALL"
    | "REVIEW"
    | "UNEXPECTED_VALUE";
  notSentToMe?: boolean;
  recipientContains?: string[];
  senderContains?: string[];
  sensitivity?: "NORMAL" | "PERSONAL" | "PRIVATE" | "CONFIDENTIAL" | "UNEXPECTED_VALUE";
  sentCcMe?: boolean;
  sentOnlyToMe?: boolean;
  sentToAddresses?: Recipient[];
  sentToMe?: boolean;
  sentToOrCcMe?: boolean;
  subjectContains?: string[];
  withinSizeRange?: SizeRange;
}

export interface MicrosoftAuthenticatorAuthenticationMethod {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  deviceTag?: string;
  displayName?: string;
  phoneAppVersion?: string;
  device?: Device;
}

export interface MicrosoftAuthenticatorAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: MicrosoftAuthenticatorAuthenticationMethodCollectionRequestBuilder;
  currentPage?: MicrosoftAuthenticatorAuthenticationMethod[];
}

export interface MicrosoftAuthenticatorAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface MobileAppIdentifier {
  oDataType?: string;
}

export interface MultiValueLegacyExtendedProperty {
  oDataType?: string;
  id?: string;
  value?: string[];
}

export interface MultiValueLegacyExtendedPropertyCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: MultiValueLegacyExtendedPropertyCollectionRequestBuilder;
  currentPage?: MultiValueLegacyExtendedProperty[];
}

export interface MultiValueLegacyExtendedPropertyCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Notebook {
  oDataType?: string;
  id?: string;
  self?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: IdentitySet;
  displayName?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  isDefault?: boolean;
  isShared?: boolean;
  links?: NotebookLinks;
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  userRole?: "NONE" | "OWNER" | "CONTRIBUTOR" | "READER" | "UNEXPECTED_VALUE";
  sectionGroups?: SectionGroupCollectionPage;
  sections?: OnenoteSectionCollectionPage;
}

export interface NotebookCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: NotebookCollectionRequestBuilder;
  currentPage?: Notebook[];
}

export interface NotebookCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface NotebookLinks {
  oDataType?: string;
  oneNoteClientUrl?: ExternalLink;
  oneNoteWebUrl?: ExternalLink;
}

export interface NumberColumn {
  oDataType?: string;
  decimalPlaces?: string;
  displayAs?: string;
  /** @format double */
  maximum?: number;
  /** @format double */
  minimum?: number;
}

export interface OAuth2PermissionGrant {
  oDataType?: string;
  id?: string;
  clientId?: string;
  consentType?: string;
  principalId?: string;
  resourceId?: string;
  scope?: string;
}

export interface OAuth2PermissionGrantCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OAuth2PermissionGrantCollectionRequestBuilder;
  currentPage?: OAuth2PermissionGrant[];
}

export interface OAuth2PermissionGrantCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ObjectIdentity {
  oDataType?: string;
  issuer?: string;
  issuerAssignedId?: string;
  signInType?: string;
}

export interface OfferShiftRequest {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  assignedTo?: "SENDER" | "RECIPIENT" | "MANAGER" | "SYSTEM" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  managerActionDateTime?: string;
  managerActionMessage?: string;
  managerUserId?: string;
  /** @format date-time */
  senderDateTime?: string;
  senderMessage?: string;
  senderUserId?: string;
  state?: "PENDING" | "APPROVED" | "DECLINED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  recipientActionDateTime?: string;
  recipientActionMessage?: string;
  recipientUserId?: string;
  senderShiftId?: string;
}

export interface OfferShiftRequestCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OfferShiftRequestCollectionRequestBuilder;
  currentPage?: OfferShiftRequest[];
}

export interface OfferShiftRequestCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OfficeGraphInsights {
  oDataType?: string;
  id?: string;
  shared?: SharedInsightCollectionPage;
  trending?: TrendingCollectionPage;
  used?: UsedInsightCollectionPage;
}

export interface OnPremisesExtensionAttributes {
  oDataType?: string;
  extensionAttribute1?: string;
  extensionAttribute10?: string;
  extensionAttribute11?: string;
  extensionAttribute12?: string;
  extensionAttribute13?: string;
  extensionAttribute14?: string;
  extensionAttribute15?: string;
  extensionAttribute2?: string;
  extensionAttribute3?: string;
  extensionAttribute4?: string;
  extensionAttribute5?: string;
  extensionAttribute6?: string;
  extensionAttribute7?: string;
  extensionAttribute8?: string;
  extensionAttribute9?: string;
}

export interface OnPremisesProvisioningError {
  oDataType?: string;
  category?: string;
  /** @format date-time */
  occurredDateTime?: string;
  propertyCausingError?: string;
  value?: string;
}

export interface Onenote {
  oDataType?: string;
  id?: string;
  notebooks?: NotebookCollectionPage;
  operations?: OnenoteOperationCollectionPage;
  pages?: OnenotePageCollectionPage;
  resources?: OnenoteResourceCollectionPage;
  sectionGroups?: SectionGroupCollectionPage;
  sections?: OnenoteSectionCollectionPage;
}

export interface OnenoteOperation {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastActionDateTime?: string;
  status?: "NOT_STARTED" | "RUNNING" | "COMPLETED" | "FAILED" | "UNEXPECTED_VALUE";
  error?: OnenoteOperationError;
  percentComplete?: string;
  resourceId?: string;
  resourceLocation?: string;
}

export interface OnenoteOperationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OnenoteOperationCollectionRequestBuilder;
  currentPage?: OnenoteOperation[];
}

export interface OnenoteOperationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OnenoteOperationError {
  oDataType?: string;
  code?: string;
  message?: string;
}

export interface OnenotePage {
  oDataType?: string;
  id?: string;
  self?: string;
  /** @format date-time */
  createdDateTime?: string;
  contentUrl?: string;
  createdByAppId?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  /** @format int32 */
  level?: number;
  links?: PageLinks;
  /** @format int32 */
  order?: number;
  title?: string;
  userTags?: string[];
  parentNotebook?: Notebook;
  parentSection?: OnenoteSection;
}

export interface OnenotePageCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OnenotePageCollectionRequestBuilder;
  currentPage?: OnenotePage[];
}

export interface OnenotePageCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OnenoteResource {
  oDataType?: string;
  id?: string;
  self?: string;
  contentUrl?: string;
}

export interface OnenoteResourceCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OnenoteResourceCollectionRequestBuilder;
  currentPage?: OnenoteResource[];
}

export interface OnenoteResourceCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OnenoteSection {
  oDataType?: string;
  id?: string;
  self?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: IdentitySet;
  displayName?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  isDefault?: boolean;
  links?: SectionLinks;
  pagesUrl?: string;
  pages?: OnenotePageCollectionPage;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
}

export interface OnenoteSectionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OnenoteSectionCollectionRequestBuilder;
  currentPage?: OnenoteSection[];
}

export interface OnenoteSectionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OnlineMeeting {
  oDataType?: string;
  id?: string;
  allowAttendeeToEnableCamera?: boolean;
  allowAttendeeToEnableMic?: boolean;
  allowedPresenters?:
    | "EVERYONE"
    | "ORGANIZATION"
    | "ROLE_IS_PRESENTER"
    | "ORGANIZER"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  allowMeetingChat?: "ENABLED" | "DISABLED" | "LIMITED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  allowParticipantsToChangeName?: boolean;
  allowTeamworkReactions?: boolean;
  audioConferencing?: AudioConferencing;
  chatInfo?: ChatInfo;
  isEntryExitAnnounced?: boolean;
  joinInformation?: ItemBody;
  joinMeetingIdSettings?: JoinMeetingIdSettings;
  joinWebUrl?: string;
  lobbyBypassSettings?: LobbyBypassSettings;
  recordAutomatically?: boolean;
  shareMeetingChatHistoryDefault?: "NONE" | "ALL" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  subject?: string;
  videoTeleconferenceId?: string;
  watermarkProtection?: WatermarkProtectionValues;
  attendanceReports?: MeetingAttendanceReportCollectionPage;
  broadcastSettings?: BroadcastMeetingSettings;
  /** @format date-time */
  creationDateTime?: string;
  /** @format date-time */
  endDateTime?: string;
  externalId?: string;
  isBroadcast?: boolean;
  participants?: MeetingParticipants;
  /** @format date-time */
  startDateTime?: string;
  recordings?: CallRecordingCollectionPage;
  transcripts?: CallTranscriptCollectionPage;
}

export interface OnlineMeetingCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OnlineMeetingCollectionRequestBuilder;
  currentPage?: OnlineMeeting[];
}

export interface OnlineMeetingCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OnlineMeetingInfo {
  oDataType?: string;
  conferenceId?: string;
  joinUrl?: string;
  phones?: Phone[];
  quickDial?: string;
  tollFreeNumbers?: string[];
  tollNumber?: string;
}

export interface OpenShift {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  draftOpenShift?: OpenShiftItem;
  schedulingGroupId?: string;
  sharedOpenShift?: OpenShiftItem;
}

export interface OpenShiftChangeRequest {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  assignedTo?: "SENDER" | "RECIPIENT" | "MANAGER" | "SYSTEM" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  managerActionDateTime?: string;
  managerActionMessage?: string;
  managerUserId?: string;
  /** @format date-time */
  senderDateTime?: string;
  senderMessage?: string;
  senderUserId?: string;
  state?: "PENDING" | "APPROVED" | "DECLINED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  openShiftId?: string;
}

export interface OpenShiftChangeRequestCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OpenShiftChangeRequestCollectionRequestBuilder;
  currentPage?: OpenShiftChangeRequest[];
}

export interface OpenShiftChangeRequestCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OpenShiftCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OpenShiftCollectionRequestBuilder;
  currentPage?: OpenShift[];
}

export interface OpenShiftCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OpenShiftItem {
  oDataType?: string;
  /** @format date-time */
  endDateTime?: string;
  /** @format date-time */
  startDateTime?: string;
  theme?:
    | "WHITE"
    | "BLUE"
    | "GREEN"
    | "PURPLE"
    | "PINK"
    | "YELLOW"
    | "GRAY"
    | "DARK_BLUE"
    | "DARK_GREEN"
    | "DARK_PURPLE"
    | "DARK_PINK"
    | "DARK_YELLOW"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  activities?: ShiftActivity[];
  displayName?: string;
  notes?: string;
  /** @format int32 */
  openSlotCount?: number;
}

export interface OperationError {
  oDataType?: string;
  code?: string;
  message?: string;
}

export interface OutlookCategory {
  oDataType?: string;
  id?: string;
  color?:
    | "NONE"
    | "PRESET0"
    | "PRESET1"
    | "PRESET2"
    | "PRESET3"
    | "PRESET4"
    | "PRESET5"
    | "PRESET6"
    | "PRESET7"
    | "PRESET8"
    | "PRESET9"
    | "PRESET10"
    | "PRESET11"
    | "PRESET12"
    | "PRESET13"
    | "PRESET14"
    | "PRESET15"
    | "PRESET16"
    | "PRESET17"
    | "PRESET18"
    | "PRESET19"
    | "PRESET20"
    | "PRESET21"
    | "PRESET22"
    | "PRESET23"
    | "PRESET24"
    | "UNEXPECTED_VALUE";
  displayName?: string;
}

export interface OutlookCategoryCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: OutlookCategoryCollectionRequestBuilder;
  currentPage?: OutlookCategory[];
}

export interface OutlookCategoryCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface OutlookGeoCoordinates {
  oDataType?: string;
  /** @format double */
  accuracy?: number;
  /** @format double */
  altitude?: number;
  /** @format double */
  altitudeAccuracy?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface OutlookUser {
  oDataType?: string;
  id?: string;
  masterCategories?: OutlookCategoryCollectionPage;
}

export interface Package {
  oDataType?: string;
  type?: string;
}

export interface PageLinks {
  oDataType?: string;
  oneNoteClientUrl?: ExternalLink;
  oneNoteWebUrl?: ExternalLink;
}

export interface PasswordAuthenticationMethod {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  password?: string;
}

export interface PasswordAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PasswordAuthenticationMethodCollectionRequestBuilder;
  currentPage?: PasswordAuthenticationMethod[];
}

export interface PasswordAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PasswordProfile {
  oDataType?: string;
  forceChangePasswordNextSignIn?: boolean;
  forceChangePasswordNextSignInWithMfa?: boolean;
  password?: string;
}

export interface PatternedRecurrence {
  oDataType?: string;
  pattern?: RecurrencePattern;
  range?: RecurrenceRange;
}

export interface PendingContentUpdate {
  oDataType?: string;
  /** @format date-time */
  queuedDateTime?: string;
}

export interface PendingOperations {
  oDataType?: string;
  pendingContentUpdate?: PendingContentUpdate;
}

export interface Permission {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  expirationDateTime?: string;
  grantedTo?: IdentitySet;
  /** @deprecated */
  grantedToIdentities?: IdentitySet[];
  grantedToIdentitiesV2?: SharePointIdentitySet[];
  grantedToV2?: SharePointIdentitySet;
  hasPassword?: boolean;
  inheritedFrom?: ItemReference;
  invitation?: SharingInvitation;
  link?: SharingLink;
  roles?: string[];
  shareId?: string;
}

export interface PermissionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PermissionCollectionRequestBuilder;
  currentPage?: Permission[];
}

export interface PermissionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PersonCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PersonCollectionRequestBuilder;
  currentPage?: Person[];
}

export interface PersonCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PersonOrGroupColumn {
  oDataType?: string;
  allowMultipleSelection?: boolean;
  chooseFromType?: string;
  displayAs?: string;
}

export interface Phone {
  oDataType?: string;
  language?: string;
  number?: string;
  region?: string;
  type?:
    | "HOME"
    | "BUSINESS"
    | "MOBILE"
    | "OTHER"
    | "ASSISTANT"
    | "HOME_FAX"
    | "BUSINESS_FAX"
    | "OTHER_FAX"
    | "PAGER"
    | "RADIO"
    | "UNEXPECTED_VALUE";
}

export interface PhoneAuthenticationMethod {
  oDataType?: string;
  id?: string;
  phoneNumber?: string;
  phoneType?: "MOBILE" | "ALTERNATE_MOBILE" | "OFFICE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  smsSignInState?:
    | "NOT_SUPPORTED"
    | "NOT_ALLOWED_BY_POLICY"
    | "NOT_ENABLED"
    | "PHONE_NUMBER_NOT_UNIQUE"
    | "READY"
    | "NOT_CONFIGURED"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
}

export interface PhoneAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PhoneAuthenticationMethodCollectionRequestBuilder;
  currentPage?: PhoneAuthenticationMethod[];
}

export interface PhoneAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Photo {
  oDataType?: string;
  cameraMake?: string;
  cameraModel?: string;
  /** @format double */
  exposureDenominator?: number;
  /** @format double */
  exposureNumerator?: number;
  /** @format double */
  fNumber?: number;
  /** @format double */
  focalLength?: number;
  /** @format int32 */
  iso?: number;
  /** @format int32 */
  orientation?: number;
  /** @format date-time */
  takenDateTime?: string;
}

export interface PhysicalAddress {
  oDataType?: string;
  city?: string;
  countryOrRegion?: string;
  postalCode?: string;
  state?: string;
  street?: string;
}

export interface PinnedChatMessageInfo {
  oDataType?: string;
  id?: string;
  message?: ChatMessage;
}

export interface PinnedChatMessageInfoCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PinnedChatMessageInfoCollectionRequestBuilder;
  currentPage?: PinnedChatMessageInfo[];
}

export interface PinnedChatMessageInfoCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PlannerAppliedCategories {
  oDataType?: string;
}

export interface PlannerAssignedToTaskBoardTaskFormat {
  oDataType?: string;
  id?: string;
  orderHintsByAssignee?: {
    oDataType?: string;
    empty?: boolean;
    [key: string]: any;
  };
  unassignedOrderHint?: string;
}

export interface PlannerAssignment {
  oDataType?: string;
  assignedBy?: IdentitySet;
  /** @format date-time */
  assignedDateTime?: string;
  orderHint?: string;
}

export interface PlannerBucket {
  oDataType?: string;
  id?: string;
  name?: string;
  orderHint?: string;
  planId?: string;
  tasks?: PlannerTaskCollectionPage;
}

export interface PlannerBucketCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PlannerBucketCollectionRequestBuilder;
  currentPage?: PlannerBucket[];
}

export interface PlannerBucketCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PlannerBucketTaskBoardTaskFormat {
  oDataType?: string;
  id?: string;
  orderHint?: string;
}

export interface PlannerCategoryDescriptions {
  oDataType?: string;
  category1?: string;
  category10?: string;
  category11?: string;
  category12?: string;
  category13?: string;
  category14?: string;
  category15?: string;
  category16?: string;
  category17?: string;
  category18?: string;
  category19?: string;
  category2?: string;
  category20?: string;
  category21?: string;
  category22?: string;
  category23?: string;
  category24?: string;
  category25?: string;
  category3?: string;
  category4?: string;
  category5?: string;
  category6?: string;
  category7?: string;
  category8?: string;
  category9?: string;
}

export interface PlannerChecklistItem {
  oDataType?: string;
  isChecked?: boolean;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  orderHint?: string;
  title?: string;
}

export interface PlannerGroup {
  oDataType?: string;
  id?: string;
  plans?: PlannerPlanCollectionPage;
}

export interface PlannerPlan {
  oDataType?: string;
  id?: string;
  container?: PlannerPlanContainer;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  /** @deprecated */
  owner?: string;
  title?: string;
  buckets?: PlannerBucketCollectionPage;
  details?: PlannerPlanDetails;
  tasks?: PlannerTaskCollectionPage;
}

export interface PlannerPlanCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PlannerPlanCollectionRequestBuilder;
  currentPage?: PlannerPlan[];
}

export interface PlannerPlanCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PlannerPlanContainer {
  oDataType?: string;
  containerId?: string;
  type?: "GROUP" | "UNKNOWN_FUTURE_VALUE" | "ROSTER" | "UNEXPECTED_VALUE";
  url?: string;
}

export interface PlannerPlanDetails {
  oDataType?: string;
  id?: string;
  categoryDescriptions?: PlannerCategoryDescriptions;
  sharedWith?: PlannerUserIds;
}

export interface PlannerProgressTaskBoardTaskFormat {
  oDataType?: string;
  id?: string;
  orderHint?: string;
}

export interface PlannerTask {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  activeChecklistItemCount?: number;
  appliedCategories?: PlannerAppliedCategories;
  assigneePriority?: string;
  assignments?: {
    oDataType?: string;
    empty?: boolean;
    [key: string]: any;
  };
  bucketId?: string;
  /** @format int32 */
  checklistItemCount?: number;
  completedBy?: IdentitySet;
  /** @format date-time */
  completedDateTime?: string;
  conversationThreadId?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  dueDateTime?: string;
  hasDescription?: boolean;
  orderHint?: string;
  /** @format int32 */
  percentComplete?: number;
  planId?: string;
  previewType?: "AUTOMATIC" | "NO_PREVIEW" | "CHECKLIST" | "DESCRIPTION" | "REFERENCE" | "UNEXPECTED_VALUE";
  /** @format int32 */
  priority?: number;
  /** @format int32 */
  referenceCount?: number;
  /** @format date-time */
  startDateTime?: string;
  title?: string;
  assignedToTaskBoardFormat?: PlannerAssignedToTaskBoardTaskFormat;
  bucketTaskBoardFormat?: PlannerBucketTaskBoardTaskFormat;
  details?: PlannerTaskDetails;
  progressTaskBoardFormat?: PlannerProgressTaskBoardTaskFormat;
}

export interface PlannerTaskCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PlannerTaskCollectionRequestBuilder;
  currentPage?: PlannerTask[];
}

export interface PlannerTaskCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PlannerTaskDetails {
  oDataType?: string;
  id?: string;
  checklist?: {
    oDataType?: string;
    empty?: boolean;
    [key: string]: any;
  };
  description?: string;
  previewType?: "AUTOMATIC" | "NO_PREVIEW" | "CHECKLIST" | "DESCRIPTION" | "REFERENCE" | "UNEXPECTED_VALUE";
  references?: {
    oDataType?: string;
    empty?: boolean;
    [key: string]: any;
  };
}

export interface PlannerUser {
  oDataType?: string;
  id?: string;
  plans?: PlannerPlanCollectionPage;
  tasks?: PlannerTaskCollectionPage;
}

export interface PlannerUserIds {
  oDataType?: string;
}

export interface Post {
  oDataType?: string;
  id?: string;
  categories?: string[];
  changeKey?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  body?: ItemBody;
  conversationId?: string;
  conversationThreadId?: string;
  from?: Recipient;
  hasAttachments?: boolean;
  newParticipants?: Recipient[];
  /** @format date-time */
  receivedDateTime?: string;
  sender?: Recipient;
  attachments?: AttachmentCollectionPage;
  extensions?: ExtensionCollectionPage;
  inReplyTo?: Post;
  multiValueExtendedProperties?: MultiValueLegacyExtendedPropertyCollectionPage;
  singleValueExtendedProperties?: SingleValueLegacyExtendedPropertyCollectionPage;
}

export interface PostCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PostCollectionRequestBuilder;
  currentPage?: Post[];
}

export interface PostCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Presence {
  oDataType?: string;
  id?: string;
  activity?: string;
  availability?: string;
  statusMessage?: PresenceStatusMessage;
}

export interface PresenceStatusMessage {
  oDataType?: string;
  expiryDateTime?: DateTimeTimeZone;
  message?: ItemBody;
  /** @format date-time */
  publishedDateTime?: string;
}

export interface PrintConnector {
  oDataType?: string;
  id?: string;
  appVersion?: string;
  displayName?: string;
  fullyQualifiedDomainName?: string;
  location?: PrinterLocation;
  operatingSystem?: string;
  /** @format date-time */
  registeredDateTime?: string;
}

export interface PrintConnectorCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PrintConnectorCollectionRequestBuilder;
  currentPage?: PrintConnector[];
}

export interface PrintConnectorCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PrintDocument {
  oDataType?: string;
  id?: string;
  contentType?: string;
  displayName?: string;
  /** @format int64 */
  size?: number;
}

export interface PrintDocumentCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PrintDocumentCollectionRequestBuilder;
  currentPage?: PrintDocument[];
}

export interface PrintDocumentCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PrintJob {
  oDataType?: string;
  id?: string;
  configuration?: PrintJobConfiguration;
  createdBy?: UserIdentity;
  /** @format date-time */
  createdDateTime?: string;
  isFetchable?: boolean;
  redirectedFrom?: string;
  redirectedTo?: string;
  status?: PrintJobStatus;
  documents?: PrintDocumentCollectionPage;
  tasks?: PrintTaskCollectionPage;
}

export interface PrintJobCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PrintJobCollectionRequestBuilder;
  currentPage?: PrintJob[];
}

export interface PrintJobCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PrintJobConfiguration {
  oDataType?: string;
  collate?: boolean;
  colorMode?: "BLACK_AND_WHITE" | "GRAYSCALE" | "COLOR" | "AUTO" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format int32 */
  copies?: number;
  /** @format int32 */
  dpi?: number;
  duplexMode?: "FLIP_ON_LONG_EDGE" | "FLIP_ON_SHORT_EDGE" | "ONE_SIDED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  feedOrientation?: "LONG_EDGE_FIRST" | "SHORT_EDGE_FIRST" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  finishings?: (
    | "NONE"
    | "STAPLE"
    | "PUNCH"
    | "COVER"
    | "BIND"
    | "SADDLE_STITCH"
    | "STITCH_EDGE"
    | "STAPLE_TOP_LEFT"
    | "STAPLE_BOTTOM_LEFT"
    | "STAPLE_TOP_RIGHT"
    | "STAPLE_BOTTOM_RIGHT"
    | "STITCH_LEFT_EDGE"
    | "STITCH_TOP_EDGE"
    | "STITCH_RIGHT_EDGE"
    | "STITCH_BOTTOM_EDGE"
    | "STAPLE_DUAL_LEFT"
    | "STAPLE_DUAL_TOP"
    | "STAPLE_DUAL_RIGHT"
    | "STAPLE_DUAL_BOTTOM"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  fitPdfToPage?: boolean;
  inputBin?: string;
  margin?: PrintMargin;
  mediaSize?: string;
  mediaType?: string;
  multipageLayout?:
    | "CLOCKWISE_FROM_TOP_LEFT"
    | "COUNTERCLOCKWISE_FROM_TOP_LEFT"
    | "COUNTERCLOCKWISE_FROM_TOP_RIGHT"
    | "CLOCKWISE_FROM_TOP_RIGHT"
    | "COUNTERCLOCKWISE_FROM_BOTTOM_LEFT"
    | "CLOCKWISE_FROM_BOTTOM_LEFT"
    | "COUNTERCLOCKWISE_FROM_BOTTOM_RIGHT"
    | "CLOCKWISE_FROM_BOTTOM_RIGHT"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  orientation?:
    | "PORTRAIT"
    | "LANDSCAPE"
    | "REVERSE_LANDSCAPE"
    | "REVERSE_PORTRAIT"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  outputBin?: string;
  pageRanges?: IntegerRange[];
  /** @format int32 */
  pagesPerSheet?: number;
  quality?: "LOW" | "MEDIUM" | "HIGH" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  scaling?: "AUTO" | "SHRINK_TO_FIT" | "FILL" | "FIT" | "NONE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface PrintJobStatus {
  oDataType?: string;
  description?: string;
  details?: (
    | "UPLOAD_PENDING"
    | "TRANSFORMING"
    | "COMPLETED_SUCCESSFULLY"
    | "COMPLETED_WITH_WARNINGS"
    | "COMPLETED_WITH_ERRORS"
    | "RELEASE_WAIT"
    | "INTERPRETING"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  isAcquiredByPrinter?: boolean;
  state?:
    | "UNKNOWN"
    | "PENDING"
    | "PROCESSING"
    | "PAUSED"
    | "STOPPED"
    | "COMPLETED"
    | "CANCELED"
    | "ABORTED"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
}

export interface PrintMargin {
  oDataType?: string;
  /** @format int32 */
  bottom?: number;
  /** @format int32 */
  left?: number;
  /** @format int32 */
  right?: number;
  /** @format int32 */
  top?: number;
}

export interface PrintTask {
  oDataType?: string;
  id?: string;
  parentUrl?: string;
  status?: PrintTaskStatus;
  definition?: PrintTaskDefinition;
  trigger?: PrintTaskTrigger;
}

export interface PrintTaskCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PrintTaskCollectionRequestBuilder;
  currentPage?: PrintTask[];
}

export interface PrintTaskCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PrintTaskDefinition {
  oDataType?: string;
  id?: string;
  createdBy?: AppIdentity;
  displayName?: string;
  tasks?: PrintTaskCollectionPage;
}

export interface PrintTaskStatus {
  oDataType?: string;
  description?: string;
  state?: "PENDING" | "PROCESSING" | "COMPLETED" | "ABORTED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface PrintTaskTrigger {
  oDataType?: string;
  id?: string;
  event?: "JOB_STARTED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  definition?: PrintTaskDefinition;
}

export interface PrintTaskTriggerCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PrintTaskTriggerCollectionRequestBuilder;
  currentPage?: PrintTaskTrigger[];
}

export interface PrintTaskTriggerCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Printer {
  oDataType?: string;
  id?: string;
  capabilities?: PrinterCapabilities;
  defaults?: PrinterDefaults;
  displayName?: string;
  isAcceptingJobs?: boolean;
  location?: PrinterLocation;
  manufacturer?: string;
  model?: string;
  status?: PrinterStatus;
  jobs?: PrintJobCollectionPage;
  hasPhysicalDevice?: boolean;
  isShared?: boolean;
  /** @format date-time */
  lastSeenDateTime?: string;
  /** @format date-time */
  registeredDateTime?: string;
  connectors?: PrintConnectorCollectionPage;
  shares?: PrinterShareCollectionPage;
  taskTriggers?: PrintTaskTriggerCollectionPage;
}

export interface PrinterCapabilities {
  oDataType?: string;
  bottomMargins?: number[];
  collation?: boolean;
  colorModes?: ("BLACK_AND_WHITE" | "GRAYSCALE" | "COLOR" | "AUTO" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE")[];
  contentTypes?: string[];
  copiesPerJob?: IntegerRange;
  dpis?: number[];
  duplexModes?: (
    | "FLIP_ON_LONG_EDGE"
    | "FLIP_ON_SHORT_EDGE"
    | "ONE_SIDED"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  feedOrientations?: ("LONG_EDGE_FIRST" | "SHORT_EDGE_FIRST" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE")[];
  finishings?: (
    | "NONE"
    | "STAPLE"
    | "PUNCH"
    | "COVER"
    | "BIND"
    | "SADDLE_STITCH"
    | "STITCH_EDGE"
    | "STAPLE_TOP_LEFT"
    | "STAPLE_BOTTOM_LEFT"
    | "STAPLE_TOP_RIGHT"
    | "STAPLE_BOTTOM_RIGHT"
    | "STITCH_LEFT_EDGE"
    | "STITCH_TOP_EDGE"
    | "STITCH_RIGHT_EDGE"
    | "STITCH_BOTTOM_EDGE"
    | "STAPLE_DUAL_LEFT"
    | "STAPLE_DUAL_TOP"
    | "STAPLE_DUAL_RIGHT"
    | "STAPLE_DUAL_BOTTOM"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  inputBins?: string[];
  isColorPrintingSupported?: boolean;
  isPageRangeSupported?: boolean;
  leftMargins?: number[];
  mediaColors?: string[];
  mediaSizes?: string[];
  mediaTypes?: string[];
  multipageLayouts?: (
    | "CLOCKWISE_FROM_TOP_LEFT"
    | "COUNTERCLOCKWISE_FROM_TOP_LEFT"
    | "COUNTERCLOCKWISE_FROM_TOP_RIGHT"
    | "CLOCKWISE_FROM_TOP_RIGHT"
    | "COUNTERCLOCKWISE_FROM_BOTTOM_LEFT"
    | "CLOCKWISE_FROM_BOTTOM_LEFT"
    | "COUNTERCLOCKWISE_FROM_BOTTOM_RIGHT"
    | "CLOCKWISE_FROM_BOTTOM_RIGHT"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  orientations?: (
    | "PORTRAIT"
    | "LANDSCAPE"
    | "REVERSE_LANDSCAPE"
    | "REVERSE_PORTRAIT"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  outputBins?: string[];
  pagesPerSheet?: number[];
  qualities?: ("LOW" | "MEDIUM" | "HIGH" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE")[];
  rightMargins?: number[];
  scalings?: ("AUTO" | "SHRINK_TO_FIT" | "FILL" | "FIT" | "NONE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE")[];
  supportsFitPdfToPage?: boolean;
  topMargins?: number[];
}

export interface PrinterDefaults {
  oDataType?: string;
  colorMode?: "BLACK_AND_WHITE" | "GRAYSCALE" | "COLOR" | "AUTO" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  contentType?: string;
  /** @format int32 */
  copiesPerJob?: number;
  /** @format int32 */
  dpi?: number;
  duplexMode?: "FLIP_ON_LONG_EDGE" | "FLIP_ON_SHORT_EDGE" | "ONE_SIDED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  finishings?: (
    | "NONE"
    | "STAPLE"
    | "PUNCH"
    | "COVER"
    | "BIND"
    | "SADDLE_STITCH"
    | "STITCH_EDGE"
    | "STAPLE_TOP_LEFT"
    | "STAPLE_BOTTOM_LEFT"
    | "STAPLE_TOP_RIGHT"
    | "STAPLE_BOTTOM_RIGHT"
    | "STITCH_LEFT_EDGE"
    | "STITCH_TOP_EDGE"
    | "STITCH_RIGHT_EDGE"
    | "STITCH_BOTTOM_EDGE"
    | "STAPLE_DUAL_LEFT"
    | "STAPLE_DUAL_TOP"
    | "STAPLE_DUAL_RIGHT"
    | "STAPLE_DUAL_BOTTOM"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE"
  )[];
  fitPdfToPage?: boolean;
  inputBin?: string;
  mediaColor?: string;
  mediaSize?: string;
  mediaType?: string;
  multipageLayout?:
    | "CLOCKWISE_FROM_TOP_LEFT"
    | "COUNTERCLOCKWISE_FROM_TOP_LEFT"
    | "COUNTERCLOCKWISE_FROM_TOP_RIGHT"
    | "CLOCKWISE_FROM_TOP_RIGHT"
    | "COUNTERCLOCKWISE_FROM_BOTTOM_LEFT"
    | "CLOCKWISE_FROM_BOTTOM_LEFT"
    | "COUNTERCLOCKWISE_FROM_BOTTOM_RIGHT"
    | "CLOCKWISE_FROM_BOTTOM_RIGHT"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  orientation?:
    | "PORTRAIT"
    | "LANDSCAPE"
    | "REVERSE_LANDSCAPE"
    | "REVERSE_PORTRAIT"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  outputBin?: string;
  /** @format int32 */
  pagesPerSheet?: number;
  quality?: "LOW" | "MEDIUM" | "HIGH" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  scaling?: "AUTO" | "SHRINK_TO_FIT" | "FILL" | "FIT" | "NONE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface PrinterLocation {
  oDataType?: string;
  /** @format int32 */
  altitudeInMeters?: number;
  building?: string;
  city?: string;
  countryOrRegion?: string;
  floor?: string;
  floorDescription?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  organization?: string[];
  postalCode?: string;
  roomDescription?: string;
  roomName?: string;
  site?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  subdivision?: string[];
  subunit?: string[];
}

export interface PrinterShare {
  oDataType?: string;
  id?: string;
  capabilities?: PrinterCapabilities;
  defaults?: PrinterDefaults;
  displayName?: string;
  isAcceptingJobs?: boolean;
  location?: PrinterLocation;
  manufacturer?: string;
  model?: string;
  status?: PrinterStatus;
  jobs?: PrintJobCollectionPage;
  allowAllUsers?: boolean;
  /** @format date-time */
  createdDateTime?: string;
  viewPoint?: PrinterShareViewpoint;
  allowedGroups?: GroupCollectionPage;
  allowedUsers?: UserCollectionPage;
  printer?: Printer;
}

export interface PrinterShareCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: PrinterShareCollectionRequestBuilder;
  currentPage?: PrinterShare[];
}

export interface PrinterShareCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface PrinterShareViewpoint {
  oDataType?: string;
  /** @format date-time */
  lastUsedDateTime?: string;
}

export interface PrinterStatus {
  oDataType?: string;
  description?: string;
  details?: (
    | "PAUSED"
    | "MEDIA_JAM"
    | "MEDIA_NEEDED"
    | "MEDIA_LOW"
    | "MEDIA_EMPTY"
    | "COVER_OPEN"
    | "INTERLOCK_OPEN"
    | "OUTPUT_TRAY_MISSING"
    | "OUTPUT_AREA_FULL"
    | "MARKER_SUPPLY_LOW"
    | "MARKER_SUPPLY_EMPTY"
    | "INPUT_TRAY_MISSING"
    | "OUTPUT_AREA_ALMOST_FULL"
    | "MARKER_WASTE_ALMOST_FULL"
    | "MARKER_WASTE_FULL"
    | "FUSER_OVER_TEMP"
    | "FUSER_UNDER_TEMP"
    | "OTHER"
    | "NONE"
    | "MOVING_TO_PAUSED"
    | "SHUTDOWN"
    | "CONNECTING_TO_DEVICE"
    | "TIMED_OUT"
    | "STOPPING"
    | "STOPPED_PARTIALLY"
    | "TONER_LOW"
    | "TONER_EMPTY"
    | "SPOOL_AREA_FULL"
    | "DOOR_OPEN"
    | "OPTICAL_PHOTO_CONDUCTOR_NEAR_END_OF_LIFE"
    | "OPTICAL_PHOTO_CONDUCTOR_LIFE_OVER"
    | "DEVELOPER_LOW"
    | "DEVELOPER_EMPTY"
    | "INTERPRETER_RESOURCE_UNAVAILABLE"
    | "UNKNOWN_FUTURE_VALUE"
    | "ALERT_REMOVAL_OF_BINARY_CHANGE_ENTRY"
    | "BANDER_ADDED"
    | "BANDER_ALMOST_EMPTY"
    | "BANDER_ALMOST_FULL"
    | "BANDER_AT_LIMIT"
    | "BANDER_CLOSED"
    | "BANDER_CONFIGURATION_CHANGE"
    | "BANDER_COVER_CLOSED"
    | "BANDER_COVER_OPEN"
    | "BANDER_EMPTY"
    | "BANDER_FULL"
    | "BANDER_INTERLOCK_CLOSED"
    | "BANDER_INTERLOCK_OPEN"
    | "BANDER_JAM"
    | "BANDER_LIFE_ALMOST_OVER"
    | "BANDER_LIFE_OVER"
    | "BANDER_MEMORY_EXHAUSTED"
    | "BANDER_MISSING"
    | "BANDER_MOTOR_FAILURE"
    | "BANDER_NEAR_LIMIT"
    | "BANDER_OFFLINE"
    | "BANDER_OPENED"
    | "BANDER_OVER_TEMPERATURE"
    | "BANDER_POWER_SAVER"
    | "BANDER_RECOVERABLE_FAILURE"
    | "BANDER_RECOVERABLE_STORAGE"
    | "BANDER_REMOVED"
    | "BANDER_RESOURCE_ADDED"
    | "BANDER_RESOURCE_REMOVED"
    | "BANDER_THERMISTOR_FAILURE"
    | "BANDER_TIMING_FAILURE"
    | "BANDER_TURNED_OFF"
    | "BANDER_TURNED_ON"
    | "BANDER_UNDER_TEMPERATURE"
    | "BANDER_UNRECOVERABLE_FAILURE"
    | "BANDER_UNRECOVERABLE_STORAGE_ERROR"
    | "BANDER_WARMING_UP"
    | "BINDER_ADDED"
    | "BINDER_ALMOST_EMPTY"
    | "BINDER_ALMOST_FULL"
    | "BINDER_AT_LIMIT"
    | "BINDER_CLOSED"
    | "BINDER_CONFIGURATION_CHANGE"
    | "BINDER_COVER_CLOSED"
    | "BINDER_COVER_OPEN"
    | "BINDER_EMPTY"
    | "BINDER_FULL"
    | "BINDER_INTERLOCK_CLOSED"
    | "BINDER_INTERLOCK_OPEN"
    | "BINDER_JAM"
    | "BINDER_LIFE_ALMOST_OVER"
    | "BINDER_LIFE_OVER"
    | "BINDER_MEMORY_EXHAUSTED"
    | "BINDER_MISSING"
    | "BINDER_MOTOR_FAILURE"
    | "BINDER_NEAR_LIMIT"
    | "BINDER_OFFLINE"
    | "BINDER_OPENED"
    | "BINDER_OVER_TEMPERATURE"
    | "BINDER_POWER_SAVER"
    | "BINDER_RECOVERABLE_FAILURE"
    | "BINDER_RECOVERABLE_STORAGE"
    | "BINDER_REMOVED"
    | "BINDER_RESOURCE_ADDED"
    | "BINDER_RESOURCE_REMOVED"
    | "BINDER_THERMISTOR_FAILURE"
    | "BINDER_TIMING_FAILURE"
    | "BINDER_TURNED_OFF"
    | "BINDER_TURNED_ON"
    | "BINDER_UNDER_TEMPERATURE"
    | "BINDER_UNRECOVERABLE_FAILURE"
    | "BINDER_UNRECOVERABLE_STORAGE_ERROR"
    | "BINDER_WARMING_UP"
    | "CAMERA_FAILURE"
    | "CHAMBER_COOLING"
    | "CHAMBER_FAILURE"
    | "CHAMBER_HEATING"
    | "CHAMBER_TEMPERATURE_HIGH"
    | "CHAMBER_TEMPERATURE_LOW"
    | "CLEANER_LIFE_ALMOST_OVER"
    | "CLEANER_LIFE_OVER"
    | "CONFIGURATION_CHANGE"
    | "DEACTIVATED"
    | "DELETED"
    | "DIE_CUTTER_ADDED"
    | "DIE_CUTTER_ALMOST_EMPTY"
    | "DIE_CUTTER_ALMOST_FULL"
    | "DIE_CUTTER_AT_LIMIT"
    | "DIE_CUTTER_CLOSED"
    | "DIE_CUTTER_CONFIGURATION_CHANGE"
    | "DIE_CUTTER_COVER_CLOSED"
    | "DIE_CUTTER_COVER_OPEN"
    | "DIE_CUTTER_EMPTY"
    | "DIE_CUTTER_FULL"
    | "DIE_CUTTER_INTERLOCK_CLOSED"
    | "DIE_CUTTER_INTERLOCK_OPEN"
    | "DIE_CUTTER_JAM"
    | "DIE_CUTTER_LIFE_ALMOST_OVER"
    | "DIE_CUTTER_LIFE_OVER"
    | "DIE_CUTTER_MEMORY_EXHAUSTED"
    | "DIE_CUTTER_MISSING"
    | "DIE_CUTTER_MOTOR_FAILURE"
    | "DIE_CUTTER_NEAR_LIMIT"
    | "DIE_CUTTER_OFFLINE"
    | "DIE_CUTTER_OPENED"
    | "DIE_CUTTER_OVER_TEMPERATURE"
    | "DIE_CUTTER_POWER_SAVER"
    | "DIE_CUTTER_RECOVERABLE_FAILURE"
    | "DIE_CUTTER_RECOVERABLE_STORAGE"
    | "DIE_CUTTER_REMOVED"
    | "DIE_CUTTER_RESOURCE_ADDED"
    | "DIE_CUTTER_RESOURCE_REMOVED"
    | "DIE_CUTTER_THERMISTOR_FAILURE"
    | "DIE_CUTTER_TIMING_FAILURE"
    | "DIE_CUTTER_TURNED_OFF"
    | "DIE_CUTTER_TURNED_ON"
    | "DIE_CUTTER_UNDER_TEMPERATURE"
    | "DIE_CUTTER_UNRECOVERABLE_FAILURE"
    | "DIE_CUTTER_UNRECOVERABLE_STORAGE_ERROR"
    | "DIE_CUTTER_WARMING_UP"
    | "EXTRUDER_COOLING"
    | "EXTRUDER_FAILURE"
    | "EXTRUDER_HEATING"
    | "EXTRUDER_JAM"
    | "EXTRUDER_TEMPERATURE_HIGH"
    | "EXTRUDER_TEMPERATURE_LOW"
    | "FAN_FAILURE"
    | "FAX_MODEM_LIFE_ALMOST_OVER"
    | "FAX_MODEM_LIFE_OVER"
    | "FAX_MODEM_MISSING"
    | "FAX_MODEM_TURNED_OFF"
    | "FAX_MODEM_TURNED_ON"
    | "FOLDER_ADDED"
    | "FOLDER_ALMOST_EMPTY"
    | "FOLDER_ALMOST_FULL"
    | "FOLDER_AT_LIMIT"
    | "FOLDER_CLOSED"
    | "FOLDER_CONFIGURATION_CHANGE"
    | "FOLDER_COVER_CLOSED"
    | "FOLDER_COVER_OPEN"
    | "FOLDER_EMPTY"
    | "FOLDER_FULL"
    | "FOLDER_INTERLOCK_CLOSED"
    | "FOLDER_INTERLOCK_OPEN"
    | "FOLDER_JAM"
    | "FOLDER_LIFE_ALMOST_OVER"
    | "FOLDER_LIFE_OVER"
    | "FOLDER_MEMORY_EXHAUSTED"
    | "FOLDER_MISSING"
    | "FOLDER_MOTOR_FAILURE"
    | "FOLDER_NEAR_LIMIT"
    | "FOLDER_OFFLINE"
    | "FOLDER_OPENED"
    | "FOLDER_OVER_TEMPERATURE"
    | "FOLDER_POWER_SAVER"
    | "FOLDER_RECOVERABLE_FAILURE"
    | "FOLDER_RECOVERABLE_STORAGE"
    | "FOLDER_REMOVED"
    | "FOLDER_RESOURCE_ADDED"
    | "FOLDER_RESOURCE_REMOVED"
    | "FOLDER_THERMISTOR_FAILURE"
    | "FOLDER_TIMING_FAILURE"
    | "FOLDER_TURNED_OFF"
    | "FOLDER_TURNED_ON"
    | "FOLDER_UNDER_TEMPERATURE"
    | "FOLDER_UNRECOVERABLE_FAILURE"
    | "FOLDER_UNRECOVERABLE_STORAGE_ERROR"
    | "FOLDER_WARMING_UP"
    | "HIBERNATE"
    | "HOLD_NEW_JOBS"
    | "IDENTIFY_PRINTER_REQUESTED"
    | "IMPRINTER_ADDED"
    | "IMPRINTER_ALMOST_EMPTY"
    | "IMPRINTER_ALMOST_FULL"
    | "IMPRINTER_AT_LIMIT"
    | "IMPRINTER_CLOSED"
    | "IMPRINTER_CONFIGURATION_CHANGE"
    | "IMPRINTER_COVER_CLOSED"
    | "IMPRINTER_COVER_OPEN"
    | "IMPRINTER_EMPTY"
    | "IMPRINTER_FULL"
    | "IMPRINTER_INTERLOCK_CLOSED"
    | "IMPRINTER_INTERLOCK_OPEN"
    | "IMPRINTER_JAM"
    | "IMPRINTER_LIFE_ALMOST_OVER"
    | "IMPRINTER_LIFE_OVER"
    | "IMPRINTER_MEMORY_EXHAUSTED"
    | "IMPRINTER_MISSING"
    | "IMPRINTER_MOTOR_FAILURE"
    | "IMPRINTER_NEAR_LIMIT"
    | "IMPRINTER_OFFLINE"
    | "IMPRINTER_OPENED"
    | "IMPRINTER_OVER_TEMPERATURE"
    | "IMPRINTER_POWER_SAVER"
    | "IMPRINTER_RECOVERABLE_FAILURE"
    | "IMPRINTER_RECOVERABLE_STORAGE"
    | "IMPRINTER_REMOVED"
    | "IMPRINTER_RESOURCE_ADDED"
    | "IMPRINTER_RESOURCE_REMOVED"
    | "IMPRINTER_THERMISTOR_FAILURE"
    | "IMPRINTER_TIMING_FAILURE"
    | "IMPRINTER_TURNED_OFF"
    | "IMPRINTER_TURNED_ON"
    | "IMPRINTER_UNDER_TEMPERATURE"
    | "IMPRINTER_UNRECOVERABLE_FAILURE"
    | "IMPRINTER_UNRECOVERABLE_STORAGE_ERROR"
    | "IMPRINTER_WARMING_UP"
    | "INPUT_CANNOT_FEED_SIZE_SELECTED"
    | "INPUT_MANUAL_INPUT_REQUEST"
    | "INPUT_MEDIA_COLOR_CHANGE"
    | "INPUT_MEDIA_FORM_PARTS_CHANGE"
    | "INPUT_MEDIA_SIZE_CHANGE"
    | "INPUT_MEDIA_TRAY_FAILURE"
    | "INPUT_MEDIA_TRAY_FEED_ERROR"
    | "INPUT_MEDIA_TRAY_JAM"
    | "INPUT_MEDIA_TYPE_CHANGE"
    | "INPUT_MEDIA_WEIGHT_CHANGE"
    | "INPUT_PICK_ROLLER_FAILURE"
    | "INPUT_PICK_ROLLER_LIFE_OVER"
    | "INPUT_PICK_ROLLER_LIFE_WARN"
    | "INPUT_PICK_ROLLER_MISSING"
    | "INPUT_TRAY_ELEVATION_FAILURE"
    | "INPUT_TRAY_POSITION_FAILURE"
    | "INSERTER_ADDED"
    | "INSERTER_ALMOST_EMPTY"
    | "INSERTER_ALMOST_FULL"
    | "INSERTER_AT_LIMIT"
    | "INSERTER_CLOSED"
    | "INSERTER_CONFIGURATION_CHANGE"
    | "INSERTER_COVER_CLOSED"
    | "INSERTER_COVER_OPEN"
    | "INSERTER_EMPTY"
    | "INSERTER_FULL"
    | "INSERTER_INTERLOCK_CLOSED"
    | "INSERTER_INTERLOCK_OPEN"
    | "INSERTER_JAM"
    | "INSERTER_LIFE_ALMOST_OVER"
    | "INSERTER_LIFE_OVER"
    | "INSERTER_MEMORY_EXHAUSTED"
    | "INSERTER_MISSING"
    | "INSERTER_MOTOR_FAILURE"
    | "INSERTER_NEAR_LIMIT"
    | "INSERTER_OFFLINE"
    | "INSERTER_OPENED"
    | "INSERTER_OVER_TEMPERATURE"
    | "INSERTER_POWER_SAVER"
    | "INSERTER_RECOVERABLE_FAILURE"
    | "INSERTER_RECOVERABLE_STORAGE"
    | "INSERTER_REMOVED"
    | "INSERTER_RESOURCE_ADDED"
    | "INSERTER_RESOURCE_REMOVED"
    | "INSERTER_THERMISTOR_FAILURE"
    | "INSERTER_TIMING_FAILURE"
    | "INSERTER_TURNED_OFF"
    | "INSERTER_TURNED_ON"
    | "INSERTER_UNDER_TEMPERATURE"
    | "INSERTER_UNRECOVERABLE_FAILURE"
    | "INSERTER_UNRECOVERABLE_STORAGE_ERROR"
    | "INSERTER_WARMING_UP"
    | "INTERLOCK_CLOSED"
    | "INTERPRETER_CARTRIDGE_ADDED"
    | "INTERPRETER_CARTRIDGE_DELETED"
    | "INTERPRETER_COMPLEX_PAGE_ENCOUNTERED"
    | "INTERPRETER_MEMORY_DECREASE"
    | "INTERPRETER_MEMORY_INCREASE"
    | "INTERPRETER_RESOURCE_ADDED"
    | "INTERPRETER_RESOURCE_DELETED"
    | "LAMP_AT_EOL"
    | "LAMP_FAILURE"
    | "LAMP_NEAR_EOL"
    | "LASER_AT_EOL"
    | "LASER_FAILURE"
    | "LASER_NEAR_EOL"
    | "MAKE_ENVELOPE_ADDED"
    | "MAKE_ENVELOPE_ALMOST_EMPTY"
    | "MAKE_ENVELOPE_ALMOST_FULL"
    | "MAKE_ENVELOPE_AT_LIMIT"
    | "MAKE_ENVELOPE_CLOSED"
    | "MAKE_ENVELOPE_CONFIGURATION_CHANGE"
    | "MAKE_ENVELOPE_COVER_CLOSED"
    | "MAKE_ENVELOPE_COVER_OPEN"
    | "MAKE_ENVELOPE_EMPTY"
    | "MAKE_ENVELOPE_FULL"
    | "MAKE_ENVELOPE_INTERLOCK_CLOSED"
    | "MAKE_ENVELOPE_INTERLOCK_OPEN"
    | "MAKE_ENVELOPE_JAM"
    | "MAKE_ENVELOPE_LIFE_ALMOST_OVER"
    | "MAKE_ENVELOPE_LIFE_OVER"
    | "MAKE_ENVELOPE_MEMORY_EXHAUSTED"
    | "MAKE_ENVELOPE_MISSING"
    | "MAKE_ENVELOPE_MOTOR_FAILURE"
    | "MAKE_ENVELOPE_NEAR_LIMIT"
    | "MAKE_ENVELOPE_OFFLINE"
    | "MAKE_ENVELOPE_OPENED"
    | "MAKE_ENVELOPE_OVER_TEMPERATURE"
    | "MAKE_ENVELOPE_POWER_SAVER"
    | "MAKE_ENVELOPE_RECOVERABLE_FAILURE"
    | "MAKE_ENVELOPE_RECOVERABLE_STORAGE"
    | "MAKE_ENVELOPE_REMOVED"
    | "MAKE_ENVELOPE_RESOURCE_ADDED"
    | "MAKE_ENVELOPE_RESOURCE_REMOVED"
    | "MAKE_ENVELOPE_THERMISTOR_FAILURE"
    | "MAKE_ENVELOPE_TIMING_FAILURE"
    | "MAKE_ENVELOPE_TURNED_OFF"
    | "MAKE_ENVELOPE_TURNED_ON"
    | "MAKE_ENVELOPE_UNDER_TEMPERATURE"
    | "MAKE_ENVELOPE_UNRECOVERABLE_FAILURE"
    | "MAKE_ENVELOPE_UNRECOVERABLE_STORAGE_ERROR"
    | "MAKE_ENVELOPE_WARMING_UP"
    | "MARKER_ADJUSTING_PRINT_QUALITY"
    | "MARKER_CLEANER_MISSING"
    | "MARKER_DEVELOPER_ALMOST_EMPTY"
    | "MARKER_DEVELOPER_EMPTY"
    | "MARKER_DEVELOPER_MISSING"
    | "MARKER_FUSER_MISSING"
    | "MARKER_FUSER_THERMISTOR_FAILURE"
    | "MARKER_FUSER_TIMING_FAILURE"
    | "MARKER_INK_ALMOST_EMPTY"
    | "MARKER_INK_EMPTY"
    | "MARKER_INK_MISSING"
    | "MARKER_OPC_MISSING"
    | "MARKER_PRINT_RIBBON_ALMOST_EMPTY"
    | "MARKER_PRINT_RIBBON_EMPTY"
    | "MARKER_PRINT_RIBBON_MISSING"
    | "MARKER_SUPPLY_ALMOST_EMPTY"
    | "MARKER_SUPPLY_MISSING"
    | "MARKER_TONER_CARTRIDGE_MISSING"
    | "MARKER_TONER_MISSING"
    | "MARKER_WASTE_INK_RECEPTACLE_ALMOST_FULL"
    | "MARKER_WASTE_INK_RECEPTACLE_FULL"
    | "MARKER_WASTE_INK_RECEPTACLE_MISSING"
    | "MARKER_WASTE_MISSING"
    | "MARKER_WASTE_TONER_RECEPTACLE_ALMOST_FULL"
    | "MARKER_WASTE_TONER_RECEPTACLE_FULL"
    | "MARKER_WASTE_TONER_RECEPTACLE_MISSING"
    | "MATERIAL_EMPTY"
    | "MATERIAL_LOW"
    | "MATERIAL_NEEDED"
    | "MEDIA_DRYING"
    | "MEDIA_PATH_CANNOT_DUPLEX_MEDIA_SELECTED"
    | "MEDIA_PATH_FAILURE"
    | "MEDIA_PATH_INPUT_EMPTY"
    | "MEDIA_PATH_INPUT_FEED_ERROR"
    | "MEDIA_PATH_INPUT_JAM"
    | "MEDIA_PATH_INPUT_REQUEST"
    | "MEDIA_PATH_JAM"
    | "MEDIA_PATH_MEDIA_TRAY_ALMOST_FULL"
    | "MEDIA_PATH_MEDIA_TRAY_FULL"
    | "MEDIA_PATH_MEDIA_TRAY_MISSING"
    | "MEDIA_PATH_OUTPUT_FEED_ERROR"
    | "MEDIA_PATH_OUTPUT_FULL"
    | "MEDIA_PATH_OUTPUT_JAM"
    | "MEDIA_PATH_PICK_ROLLER_FAILURE"
    | "MEDIA_PATH_PICK_ROLLER_LIFE_OVER"
    | "MEDIA_PATH_PICK_ROLLER_LIFE_WARN"
    | "MEDIA_PATH_PICK_ROLLER_MISSING"
    | "MOTOR_FAILURE"
    | "OUTPUT_MAILBOX_SELECT_FAILURE"
    | "OUTPUT_MEDIA_TRAY_FAILURE"
    | "OUTPUT_MEDIA_TRAY_FEED_ERROR"
    | "OUTPUT_MEDIA_TRAY_JAM"
    | "PERFORATER_ADDED"
    | "PERFORATER_ALMOST_EMPTY"
    | "PERFORATER_ALMOST_FULL"
    | "PERFORATER_AT_LIMIT"
    | "PERFORATER_CLOSED"
    | "PERFORATER_CONFIGURATION_CHANGE"
    | "PERFORATER_COVER_CLOSED"
    | "PERFORATER_COVER_OPEN"
    | "PERFORATER_EMPTY"
    | "PERFORATER_FULL"
    | "PERFORATER_INTERLOCK_CLOSED"
    | "PERFORATER_INTERLOCK_OPEN"
    | "PERFORATER_JAM"
    | "PERFORATER_LIFE_ALMOST_OVER"
    | "PERFORATER_LIFE_OVER"
    | "PERFORATER_MEMORY_EXHAUSTED"
    | "PERFORATER_MISSING"
    | "PERFORATER_MOTOR_FAILURE"
    | "PERFORATER_NEAR_LIMIT"
    | "PERFORATER_OFFLINE"
    | "PERFORATER_OPENED"
    | "PERFORATER_OVER_TEMPERATURE"
    | "PERFORATER_POWER_SAVER"
    | "PERFORATER_RECOVERABLE_FAILURE"
    | "PERFORATER_RECOVERABLE_STORAGE"
    | "PERFORATER_REMOVED"
    | "PERFORATER_RESOURCE_ADDED"
    | "PERFORATER_RESOURCE_REMOVED"
    | "PERFORATER_THERMISTOR_FAILURE"
    | "PERFORATER_TIMING_FAILURE"
    | "PERFORATER_TURNED_OFF"
    | "PERFORATER_TURNED_ON"
    | "PERFORATER_UNDER_TEMPERATURE"
    | "PERFORATER_UNRECOVERABLE_FAILURE"
    | "PERFORATER_UNRECOVERABLE_STORAGE_ERROR"
    | "PERFORATER_WARMING_UP"
    | "PLATFORM_COOLING"
    | "PLATFORM_FAILURE"
    | "PLATFORM_HEATING"
    | "PLATFORM_TEMPERATURE_HIGH"
    | "PLATFORM_TEMPERATURE_LOW"
    | "POWER_DOWN"
    | "POWER_UP"
    | "PRINTER_MANUAL_RESET"
    | "PRINTER_NMS_RESET"
    | "PRINTER_READY_TO_PRINT"
    | "PUNCHER_ADDED"
    | "PUNCHER_ALMOST_EMPTY"
    | "PUNCHER_ALMOST_FULL"
    | "PUNCHER_AT_LIMIT"
    | "PUNCHER_CLOSED"
    | "PUNCHER_CONFIGURATION_CHANGE"
    | "PUNCHER_COVER_CLOSED"
    | "PUNCHER_COVER_OPEN"
    | "PUNCHER_EMPTY"
    | "PUNCHER_FULL"
    | "PUNCHER_INTERLOCK_CLOSED"
    | "PUNCHER_INTERLOCK_OPEN"
    | "PUNCHER_JAM"
    | "PUNCHER_LIFE_ALMOST_OVER"
    | "PUNCHER_LIFE_OVER"
    | "PUNCHER_MEMORY_EXHAUSTED"
    | "PUNCHER_MISSING"
    | "PUNCHER_MOTOR_FAILURE"
    | "PUNCHER_NEAR_LIMIT"
    | "PUNCHER_OFFLINE"
    | "PUNCHER_OPENED"
    | "PUNCHER_OVER_TEMPERATURE"
    | "PUNCHER_POWER_SAVER"
    | "PUNCHER_RECOVERABLE_FAILURE"
    | "PUNCHER_RECOVERABLE_STORAGE"
    | "PUNCHER_REMOVED"
    | "PUNCHER_RESOURCE_ADDED"
    | "PUNCHER_RESOURCE_REMOVED"
    | "PUNCHER_THERMISTOR_FAILURE"
    | "PUNCHER_TIMING_FAILURE"
    | "PUNCHER_TURNED_OFF"
    | "PUNCHER_TURNED_ON"
    | "PUNCHER_UNDER_TEMPERATURE"
    | "PUNCHER_UNRECOVERABLE_FAILURE"
    | "PUNCHER_UNRECOVERABLE_STORAGE_ERROR"
    | "PUNCHER_WARMING_UP"
    | "RESUMING"
    | "SCAN_MEDIA_PATH_FAILURE"
    | "SCAN_MEDIA_PATH_INPUT_EMPTY"
    | "SCAN_MEDIA_PATH_INPUT_FEED_ERROR"
    | "SCAN_MEDIA_PATH_INPUT_JAM"
    | "SCAN_MEDIA_PATH_INPUT_REQUEST"
    | "SCAN_MEDIA_PATH_JAM"
    | "SCAN_MEDIA_PATH_OUTPUT_FEED_ERROR"
    | "SCAN_MEDIA_PATH_OUTPUT_FULL"
    | "SCAN_MEDIA_PATH_OUTPUT_JAM"
    | "SCAN_MEDIA_PATH_PICK_ROLLER_FAILURE"
    | "SCAN_MEDIA_PATH_PICK_ROLLER_LIFE_OVER"
    | "SCAN_MEDIA_PATH_PICK_ROLLER_LIFE_WARN"
    | "SCAN_MEDIA_PATH_PICK_ROLLER_MISSING"
    | "SCAN_MEDIA_PATH_TRAY_ALMOST_FULL"
    | "SCAN_MEDIA_PATH_TRAY_FULL"
    | "SCAN_MEDIA_PATH_TRAY_MISSING"
    | "SCANNER_LIGHT_FAILURE"
    | "SCANNER_LIGHT_LIFE_ALMOST_OVER"
    | "SCANNER_LIGHT_LIFE_OVER"
    | "SCANNER_LIGHT_MISSING"
    | "SCANNER_SENSOR_FAILURE"
    | "SCANNER_SENSOR_LIFE_ALMOST_OVER"
    | "SCANNER_SENSOR_LIFE_OVER"
    | "SCANNER_SENSOR_MISSING"
    | "SEPARATION_CUTTER_ADDED"
    | "SEPARATION_CUTTER_ALMOST_EMPTY"
    | "SEPARATION_CUTTER_ALMOST_FULL"
    | "SEPARATION_CUTTER_AT_LIMIT"
    | "SEPARATION_CUTTER_CLOSED"
    | "SEPARATION_CUTTER_CONFIGURATION_CHANGE"
    | "SEPARATION_CUTTER_COVER_CLOSED"
    | "SEPARATION_CUTTER_COVER_OPEN"
    | "SEPARATION_CUTTER_EMPTY"
    | "SEPARATION_CUTTER_FULL"
    | "SEPARATION_CUTTER_INTERLOCK_CLOSED"
    | "SEPARATION_CUTTER_INTERLOCK_OPEN"
    | "SEPARATION_CUTTER_JAM"
    | "SEPARATION_CUTTER_LIFE_ALMOST_OVER"
    | "SEPARATION_CUTTER_LIFE_OVER"
    | "SEPARATION_CUTTER_MEMORY_EXHAUSTED"
    | "SEPARATION_CUTTER_MISSING"
    | "SEPARATION_CUTTER_MOTOR_FAILURE"
    | "SEPARATION_CUTTER_NEAR_LIMIT"
    | "SEPARATION_CUTTER_OFFLINE"
    | "SEPARATION_CUTTER_OPENED"
    | "SEPARATION_CUTTER_OVER_TEMPERATURE"
    | "SEPARATION_CUTTER_POWER_SAVER"
    | "SEPARATION_CUTTER_RECOVERABLE_FAILURE"
    | "SEPARATION_CUTTER_RECOVERABLE_STORAGE"
    | "SEPARATION_CUTTER_REMOVED"
    | "SEPARATION_CUTTER_RESOURCE_ADDED"
    | "SEPARATION_CUTTER_RESOURCE_REMOVED"
    | "SEPARATION_CUTTER_THERMISTOR_FAILURE"
    | "SEPARATION_CUTTER_TIMING_FAILURE"
    | "SEPARATION_CUTTER_TURNED_OFF"
    | "SEPARATION_CUTTER_TURNED_ON"
    | "SEPARATION_CUTTER_UNDER_TEMPERATURE"
    | "SEPARATION_CUTTER_UNRECOVERABLE_FAILURE"
    | "SEPARATION_CUTTER_UNRECOVERABLE_STORAGE_ERROR"
    | "SEPARATION_CUTTER_WARMING_UP"
    | "SHEET_ROTATOR_ADDED"
    | "SHEET_ROTATOR_ALMOST_EMPTY"
    | "SHEET_ROTATOR_ALMOST_FULL"
    | "SHEET_ROTATOR_AT_LIMIT"
    | "SHEET_ROTATOR_CLOSED"
    | "SHEET_ROTATOR_CONFIGURATION_CHANGE"
    | "SHEET_ROTATOR_COVER_CLOSED"
    | "SHEET_ROTATOR_COVER_OPEN"
    | "SHEET_ROTATOR_EMPTY"
    | "SHEET_ROTATOR_FULL"
    | "SHEET_ROTATOR_INTERLOCK_CLOSED"
    | "SHEET_ROTATOR_INTERLOCK_OPEN"
    | "SHEET_ROTATOR_JAM"
    | "SHEET_ROTATOR_LIFE_ALMOST_OVER"
    | "SHEET_ROTATOR_LIFE_OVER"
    | "SHEET_ROTATOR_MEMORY_EXHAUSTED"
    | "SHEET_ROTATOR_MISSING"
    | "SHEET_ROTATOR_MOTOR_FAILURE"
    | "SHEET_ROTATOR_NEAR_LIMIT"
    | "SHEET_ROTATOR_OFFLINE"
    | "SHEET_ROTATOR_OPENED"
    | "SHEET_ROTATOR_OVER_TEMPERATURE"
    | "SHEET_ROTATOR_POWER_SAVER"
    | "SHEET_ROTATOR_RECOVERABLE_FAILURE"
    | "SHEET_ROTATOR_RECOVERABLE_STORAGE"
    | "SHEET_ROTATOR_REMOVED"
    | "SHEET_ROTATOR_RESOURCE_ADDED"
    | "SHEET_ROTATOR_RESOURCE_REMOVED"
    | "SHEET_ROTATOR_THERMISTOR_FAILURE"
    | "SHEET_ROTATOR_TIMING_FAILURE"
    | "SHEET_ROTATOR_TURNED_OFF"
    | "SHEET_ROTATOR_TURNED_ON"
    | "SHEET_ROTATOR_UNDER_TEMPERATURE"
    | "SHEET_ROTATOR_UNRECOVERABLE_FAILURE"
    | "SHEET_ROTATOR_UNRECOVERABLE_STORAGE_ERROR"
    | "SHEET_ROTATOR_WARMING_UP"
    | "SLITTER_ADDED"
    | "SLITTER_ALMOST_EMPTY"
    | "SLITTER_ALMOST_FULL"
    | "SLITTER_AT_LIMIT"
    | "SLITTER_CLOSED"
    | "SLITTER_CONFIGURATION_CHANGE"
    | "SLITTER_COVER_CLOSED"
    | "SLITTER_COVER_OPEN"
    | "SLITTER_EMPTY"
    | "SLITTER_FULL"
    | "SLITTER_INTERLOCK_CLOSED"
    | "SLITTER_INTERLOCK_OPEN"
    | "SLITTER_JAM"
    | "SLITTER_LIFE_ALMOST_OVER"
    | "SLITTER_LIFE_OVER"
    | "SLITTER_MEMORY_EXHAUSTED"
    | "SLITTER_MISSING"
    | "SLITTER_MOTOR_FAILURE"
    | "SLITTER_NEAR_LIMIT"
    | "SLITTER_OFFLINE"
    | "SLITTER_OPENED"
    | "SLITTER_OVER_TEMPERATURE"
    | "SLITTER_POWER_SAVER"
    | "SLITTER_RECOVERABLE_FAILURE"
    | "SLITTER_RECOVERABLE_STORAGE"
    | "SLITTER_REMOVED"
    | "SLITTER_RESOURCE_ADDED"
    | "SLITTER_RESOURCE_REMOVED"
    | "SLITTER_THERMISTOR_FAILURE"
    | "SLITTER_TIMING_FAILURE"
    | "SLITTER_TURNED_OFF"
    | "SLITTER_TURNED_ON"
    | "SLITTER_UNDER_TEMPERATURE"
    | "SLITTER_UNRECOVERABLE_FAILURE"
    | "SLITTER_UNRECOVERABLE_STORAGE_ERROR"
    | "SLITTER_WARMING_UP"
    | "STACKER_ADDED"
    | "STACKER_ALMOST_EMPTY"
    | "STACKER_ALMOST_FULL"
    | "STACKER_AT_LIMIT"
    | "STACKER_CLOSED"
    | "STACKER_CONFIGURATION_CHANGE"
    | "STACKER_COVER_CLOSED"
    | "STACKER_COVER_OPEN"
    | "STACKER_EMPTY"
    | "STACKER_FULL"
    | "STACKER_INTERLOCK_CLOSED"
    | "STACKER_INTERLOCK_OPEN"
    | "STACKER_JAM"
    | "STACKER_LIFE_ALMOST_OVER"
    | "STACKER_LIFE_OVER"
    | "STACKER_MEMORY_EXHAUSTED"
    | "STACKER_MISSING"
    | "STACKER_MOTOR_FAILURE"
    | "STACKER_NEAR_LIMIT"
    | "STACKER_OFFLINE"
    | "STACKER_OPENED"
    | "STACKER_OVER_TEMPERATURE"
    | "STACKER_POWER_SAVER"
    | "STACKER_RECOVERABLE_FAILURE"
    | "STACKER_RECOVERABLE_STORAGE"
    | "STACKER_REMOVED"
    | "STACKER_RESOURCE_ADDED"
    | "STACKER_RESOURCE_REMOVED"
    | "STACKER_THERMISTOR_FAILURE"
    | "STACKER_TIMING_FAILURE"
    | "STACKER_TURNED_OFF"
    | "STACKER_TURNED_ON"
    | "STACKER_UNDER_TEMPERATURE"
    | "STACKER_UNRECOVERABLE_FAILURE"
    | "STACKER_UNRECOVERABLE_STORAGE_ERROR"
    | "STACKER_WARMING_UP"
    | "STANDBY"
    | "STAPLER_ADDED"
    | "STAPLER_ALMOST_EMPTY"
    | "STAPLER_ALMOST_FULL"
    | "STAPLER_AT_LIMIT"
    | "STAPLER_CLOSED"
    | "STAPLER_CONFIGURATION_CHANGE"
    | "STAPLER_COVER_CLOSED"
    | "STAPLER_COVER_OPEN"
    | "STAPLER_EMPTY"
    | "STAPLER_FULL"
    | "STAPLER_INTERLOCK_CLOSED"
    | "STAPLER_INTERLOCK_OPEN"
    | "STAPLER_JAM"
    | "STAPLER_LIFE_ALMOST_OVER"
    | "STAPLER_LIFE_OVER"
    | "STAPLER_MEMORY_EXHAUSTED"
    | "STAPLER_MISSING"
    | "STAPLER_MOTOR_FAILURE"
    | "STAPLER_NEAR_LIMIT"
    | "STAPLER_OFFLINE"
    | "STAPLER_OPENED"
    | "STAPLER_OVER_TEMPERATURE"
    | "STAPLER_POWER_SAVER"
    | "STAPLER_RECOVERABLE_FAILURE"
    | "STAPLER_RECOVERABLE_STORAGE"
    | "STAPLER_REMOVED"
    | "STAPLER_RESOURCE_ADDED"
    | "STAPLER_RESOURCE_REMOVED"
    | "STAPLER_THERMISTOR_FAILURE"
    | "STAPLER_TIMING_FAILURE"
    | "STAPLER_TURNED_OFF"
    | "STAPLER_TURNED_ON"
    | "STAPLER_UNDER_TEMPERATURE"
    | "STAPLER_UNRECOVERABLE_FAILURE"
    | "STAPLER_UNRECOVERABLE_STORAGE_ERROR"
    | "STAPLER_WARMING_UP"
    | "STITCHER_ADDED"
    | "STITCHER_ALMOST_EMPTY"
    | "STITCHER_ALMOST_FULL"
    | "STITCHER_AT_LIMIT"
    | "STITCHER_CLOSED"
    | "STITCHER_CONFIGURATION_CHANGE"
    | "STITCHER_COVER_CLOSED"
    | "STITCHER_COVER_OPEN"
    | "STITCHER_EMPTY"
    | "STITCHER_FULL"
    | "STITCHER_INTERLOCK_CLOSED"
    | "STITCHER_INTERLOCK_OPEN"
    | "STITCHER_JAM"
    | "STITCHER_LIFE_ALMOST_OVER"
    | "STITCHER_LIFE_OVER"
    | "STITCHER_MEMORY_EXHAUSTED"
    | "STITCHER_MISSING"
    | "STITCHER_MOTOR_FAILURE"
    | "STITCHER_NEAR_LIMIT"
    | "STITCHER_OFFLINE"
    | "STITCHER_OPENED"
    | "STITCHER_OVER_TEMPERATURE"
    | "STITCHER_POWER_SAVER"
    | "STITCHER_RECOVERABLE_FAILURE"
    | "STITCHER_RECOVERABLE_STORAGE"
    | "STITCHER_REMOVED"
    | "STITCHER_RESOURCE_ADDED"
    | "STITCHER_RESOURCE_REMOVED"
    | "STITCHER_THERMISTOR_FAILURE"
    | "STITCHER_TIMING_FAILURE"
    | "STITCHER_TURNED_OFF"
    | "STITCHER_TURNED_ON"
    | "STITCHER_UNDER_TEMPERATURE"
    | "STITCHER_UNRECOVERABLE_FAILURE"
    | "STITCHER_UNRECOVERABLE_STORAGE_ERROR"
    | "STITCHER_WARMING_UP"
    | "SUBUNIT_ADDED"
    | "SUBUNIT_ALMOST_EMPTY"
    | "SUBUNIT_ALMOST_FULL"
    | "SUBUNIT_AT_LIMIT"
    | "SUBUNIT_CLOSED"
    | "SUBUNIT_COOLING_DOWN"
    | "SUBUNIT_EMPTY"
    | "SUBUNIT_FULL"
    | "SUBUNIT_LIFE_ALMOST_OVER"
    | "SUBUNIT_LIFE_OVER"
    | "SUBUNIT_MEMORY_EXHAUSTED"
    | "SUBUNIT_MISSING"
    | "SUBUNIT_MOTOR_FAILURE"
    | "SUBUNIT_NEAR_LIMIT"
    | "SUBUNIT_OFFLINE"
    | "SUBUNIT_OPENED"
    | "SUBUNIT_OVER_TEMPERATURE"
    | "SUBUNIT_POWER_SAVER"
    | "SUBUNIT_RECOVERABLE_FAILURE"
    | "SUBUNIT_RECOVERABLE_STORAGE"
    | "SUBUNIT_REMOVED"
    | "SUBUNIT_RESOURCE_ADDED"
    | "SUBUNIT_RESOURCE_REMOVED"
    | "SUBUNIT_THERMISTOR_FAILURE"
    | "SUBUNIT_TIMING_FAILURE"
    | "SUBUNIT_TURNED_OFF"
    | "SUBUNIT_TURNED_ON"
    | "SUBUNIT_UNDER_TEMPERATURE"
    | "SUBUNIT_UNRECOVERABLE_FAILURE"
    | "SUBUNIT_UNRECOVERABLE_STORAGE"
    | "SUBUNIT_WARMING_UP"
    | "SUSPEND"
    | "TESTING"
    | "TRIMMER_ADDED"
    | "TRIMMER_ALMOST_EMPTY"
    | "TRIMMER_ALMOST_FULL"
    | "TRIMMER_AT_LIMIT"
    | "TRIMMER_CLOSED"
    | "TRIMMER_CONFIGURATION_CHANGE"
    | "TRIMMER_COVER_CLOSED"
    | "TRIMMER_COVER_OPEN"
    | "TRIMMER_EMPTY"
    | "TRIMMER_FULL"
    | "TRIMMER_INTERLOCK_CLOSED"
    | "TRIMMER_INTERLOCK_OPEN"
    | "TRIMMER_JAM"
    | "TRIMMER_LIFE_ALMOST_OVER"
    | "TRIMMER_LIFE_OVER"
    | "TRIMMER_MEMORY_EXHAUSTED"
    | "TRIMMER_MISSING"
    | "TRIMMER_MOTOR_FAILURE"
    | "TRIMMER_NEAR_LIMIT"
    | "TRIMMER_OFFLINE"
    | "TRIMMER_OPENED"
    | "TRIMMER_OVER_TEMPERATURE"
    | "TRIMMER_POWER_SAVER"
    | "TRIMMER_RECOVERABLE_FAILURE"
    | "TRIMMER_RECOVERABLE_STORAGE"
    | "TRIMMER_REMOVED"
    | "TRIMMER_RESOURCE_ADDED"
    | "TRIMMER_RESOURCE_REMOVED"
    | "TRIMMER_THERMISTOR_FAILURE"
    | "TRIMMER_TIMING_FAILURE"
    | "TRIMMER_TURNED_OFF"
    | "TRIMMER_TURNED_ON"
    | "TRIMMER_UNDER_TEMPERATURE"
    | "TRIMMER_UNRECOVERABLE_FAILURE"
    | "TRIMMER_UNRECOVERABLE_STORAGE_ERROR"
    | "TRIMMER_WARMING_UP"
    | "UNKNOWN"
    | "WRAPPER_ADDED"
    | "WRAPPER_ALMOST_EMPTY"
    | "WRAPPER_ALMOST_FULL"
    | "WRAPPER_AT_LIMIT"
    | "WRAPPER_CLOSED"
    | "WRAPPER_CONFIGURATION_CHANGE"
    | "WRAPPER_COVER_CLOSED"
    | "WRAPPER_COVER_OPEN"
    | "WRAPPER_EMPTY"
    | "WRAPPER_FULL"
    | "WRAPPER_INTERLOCK_CLOSED"
    | "WRAPPER_INTERLOCK_OPEN"
    | "WRAPPER_JAM"
    | "WRAPPER_LIFE_ALMOST_OVER"
    | "WRAPPER_LIFE_OVER"
    | "WRAPPER_MEMORY_EXHAUSTED"
    | "WRAPPER_MISSING"
    | "WRAPPER_MOTOR_FAILURE"
    | "WRAPPER_NEAR_LIMIT"
    | "WRAPPER_OFFLINE"
    | "WRAPPER_OPENED"
    | "WRAPPER_OVER_TEMPERATURE"
    | "WRAPPER_POWER_SAVER"
    | "WRAPPER_RECOVERABLE_FAILURE"
    | "WRAPPER_RECOVERABLE_STORAGE"
    | "WRAPPER_REMOVED"
    | "WRAPPER_RESOURCE_ADDED"
    | "WRAPPER_RESOURCE_REMOVED"
    | "WRAPPER_THERMISTOR_FAILURE"
    | "WRAPPER_TIMING_FAILURE"
    | "WRAPPER_TURNED_OFF"
    | "WRAPPER_TURNED_ON"
    | "WRAPPER_UNDER_TEMPERATURE"
    | "WRAPPER_UNRECOVERABLE_FAILURE"
    | "WRAPPER_UNRECOVERABLE_STORAGE_ERROR"
    | "WRAPPER_WARMING_UP"
    | "UNEXPECTED_VALUE"
  )[];
  state?: "UNKNOWN" | "IDLE" | "PROCESSING" | "STOPPED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface ProfilePhoto {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  width?: number;
}

export interface ProfilePhotoCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ProfilePhotoCollectionRequestBuilder;
  currentPage?: ProfilePhoto[];
}

export interface ProfilePhotoCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ProvisionedPlan {
  oDataType?: string;
  capabilityStatus?: string;
  provisioningStatus?: string;
  service?: string;
}

export interface PublicError {
  oDataType?: string;
  code?: string;
  details?: PublicErrorDetail[];
  innerError?: PublicInnerError;
  message?: string;
  target?: string;
}

export interface PublicErrorDetail {
  oDataType?: string;
  code?: string;
  message?: string;
  target?: string;
}

export interface PublicInnerError {
  oDataType?: string;
  code?: string;
  details?: PublicErrorDetail[];
  message?: string;
  target?: string;
}

export interface PublicationFacet {
  oDataType?: string;
  checkedOutBy?: IdentitySet;
  level?: string;
  versionId?: string;
}

export interface Quota {
  oDataType?: string;
  /** @format int64 */
  deleted?: number;
  /** @format int64 */
  remaining?: number;
  state?: string;
  storagePlanInformation?: StoragePlanInformation;
  /** @format int64 */
  total?: number;
  /** @format int64 */
  used?: number;
}

export interface Recipient {
  oDataType?: string;
  emailAddress?: EmailAddress;
}

export interface RecurrencePattern {
  oDataType?: string;
  /** @format int32 */
  dayOfMonth?: number;
  daysOfWeek?: (
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "UNEXPECTED_VALUE"
  )[];
  firstDayOfWeek?:
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "UNEXPECTED_VALUE";
  index?: "FIRST" | "SECOND" | "THIRD" | "FOURTH" | "LAST" | "UNEXPECTED_VALUE";
  /** @format int32 */
  interval?: number;
  /** @format int32 */
  month?: number;
  type?:
    | "DAILY"
    | "WEEKLY"
    | "ABSOLUTE_MONTHLY"
    | "RELATIVE_MONTHLY"
    | "ABSOLUTE_YEARLY"
    | "RELATIVE_YEARLY"
    | "UNEXPECTED_VALUE";
}

export interface RecurrenceRange {
  oDataType?: string;
  endDate?: DateOnly;
  /** @format int32 */
  numberOfOccurrences?: number;
  recurrenceTimeZone?: string;
  startDate?: DateOnly;
  type?: "END_DATE" | "NO_END" | "NUMBERED" | "UNEXPECTED_VALUE";
}

export interface Relation {
  oDataType?: string;
  id?: string;
  relationship?: "PIN" | "REUSE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  fromTerm?: Term;
  set?: Set;
  toTerm?: Term;
}

export interface RelationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: RelationCollectionRequestBuilder;
  currentPage?: Relation[];
}

export interface RelationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface RemoteItem {
  oDataType?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  id?: string;
  image?: Image;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  msgraphPackage?: Package;
  parentReference?: ItemReference;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  /** @format int64 */
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  webUrl?: string;
}

export interface ResourceReference {
  oDataType?: string;
  id?: string;
  type?: string;
  webUrl?: string;
}

export interface ResourceSpecificPermissionGrant {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  deletedDateTime?: string;
  clientAppId?: string;
  clientId?: string;
  permission?: string;
  permissionType?: string;
  resourceAppId?: string;
}

export interface ResourceSpecificPermissionGrantCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ResourceSpecificPermissionGrantCollectionRequestBuilder;
  currentPage?: ResourceSpecificPermissionGrant[];
}

export interface ResourceSpecificPermissionGrantCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ResourceVisualization {
  oDataType?: string;
  containerDisplayName?: string;
  containerType?: string;
  containerWebUrl?: string;
  mediaType?: string;
  previewImageUrl?: string;
  previewText?: string;
  title?: string;
  type?: string;
}

export interface ResponseStatus {
  oDataType?: string;
  response?:
    | "NONE"
    | "ORGANIZER"
    | "TENTATIVELY_ACCEPTED"
    | "ACCEPTED"
    | "DECLINED"
    | "NOT_RESPONDED"
    | "UNEXPECTED_VALUE";
  /** @format date-time */
  time?: string;
}

export interface RetentionLabelSettings {
  oDataType?: string;
  behaviorDuringRetentionPeriod?:
    | "DO_NOT_RETAIN"
    | "RETAIN"
    | "RETAIN_AS_RECORD"
    | "RETAIN_AS_REGULATORY_RECORD"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  isContentUpdateAllowed?: boolean;
  isDeleteAllowed?: boolean;
  isLabelUpdateAllowed?: boolean;
  isMetadataUpdateAllowed?: boolean;
  isRecordLocked?: boolean;
}

export interface RichLongRunningOperation {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  lastActionDateTime?: string;
  resourceLocation?: string;
  status?: "NOT_STARTED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  statusDetail?: string;
  error?: PublicError;
  /** @format int32 */
  percentageComplete?: number;
  resourceId?: string;
  type?: string;
}

export interface RichLongRunningOperationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: RichLongRunningOperationCollectionRequestBuilder;
  currentPage?: RichLongRunningOperation[];
}

export interface RichLongRunningOperationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Root {
  oDataType?: string;
}

export interface Schedule {
  oDataType?: string;
  id?: string;
  enabled?: boolean;
  offerShiftRequestsEnabled?: boolean;
  openShiftsEnabled?: boolean;
  provisionStatus?: "NOT_STARTED" | "RUNNING" | "COMPLETED" | "FAILED" | "UNEXPECTED_VALUE";
  provisionStatusCode?: string;
  swapShiftsRequestsEnabled?: boolean;
  timeClockEnabled?: boolean;
  timeOffRequestsEnabled?: boolean;
  timeZone?: string;
  workforceIntegrationIds?: string[];
  offerShiftRequests?: OfferShiftRequestCollectionPage;
  openShiftChangeRequests?: OpenShiftChangeRequestCollectionPage;
  openShifts?: OpenShiftCollectionPage;
  schedulingGroups?: SchedulingGroupCollectionPage;
  shifts?: ShiftCollectionPage;
  swapShiftsChangeRequests?: SwapShiftsChangeRequestCollectionPage;
  timeOffReasons?: TimeOffReasonCollectionPage;
  timeOffRequests?: TimeOffRequestCollectionPage;
  timesOff?: TimeOffCollectionPage;
}

export interface SchedulingGroup {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  displayName?: string;
  isActive?: boolean;
  userIds?: string[];
}

export interface SchedulingGroupCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SchedulingGroupCollectionRequestBuilder;
  currentPage?: SchedulingGroup[];
}

export interface SchedulingGroupCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ScopedRoleMembership {
  oDataType?: string;
  id?: string;
  administrativeUnitId?: string;
  roleId?: string;
  roleMemberInfo?: Identity;
}

export interface ScopedRoleMembershipCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ScopedRoleMembershipCollectionRequestBuilder;
  currentPage?: ScopedRoleMembership[];
}

export interface ScopedRoleMembershipCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SearchResult {
  oDataType?: string;
  onClickTelemetryUrl?: string;
}

export interface SectionGroup {
  oDataType?: string;
  id?: string;
  self?: string;
  /** @format date-time */
  createdDateTime?: string;
  createdBy?: IdentitySet;
  displayName?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  sectionGroups?: SectionGroupCollectionPage;
  sections?: OnenoteSectionCollectionPage;
}

export interface SectionGroupCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SectionGroupCollectionRequestBuilder;
  currentPage?: SectionGroup[];
}

export interface SectionGroupCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SectionLinks {
  oDataType?: string;
  oneNoteClientUrl?: ExternalLink;
  oneNoteWebUrl?: ExternalLink;
}

export interface ServicePlanInfo {
  oDataType?: string;
  appliesTo?: string;
  provisioningStatus?: string;
  /** @format uuid */
  servicePlanId?: string;
  servicePlanName?: string;
}

export interface ServiceProvisioningError {
  oDataType?: string;
  /** @format date-time */
  createdDateTime?: string;
  isResolved?: boolean;
  serviceInstance?: string;
}

export interface Set {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  localizedNames?: LocalizedName[];
  properties?: KeyValue[];
  children?: TermCollectionPage;
  parentGroup?: Group;
  relations?: RelationCollectionPage;
  terms?: TermCollectionPage;
}

export interface SetCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SetCollectionRequestBuilder;
  currentPage?: Set[];
}

export interface SetCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SettingSource {
  oDataType?: string;
  displayName?: string;
  id?: string;
  sourceType?: "DEVICE_CONFIGURATION" | "DEVICE_INTENT" | "UNEXPECTED_VALUE";
}

export interface SettingValue {
  oDataType?: string;
  name?: string;
  value?: string;
}

export interface SharePointIdentity {
  oDataType?: string;
  displayName?: string;
  id?: string;
  loginName?: string;
}

export interface SharePointIdentitySet {
  oDataType?: string;
  application?: Identity;
  device?: Identity;
  user?: Identity;
  group?: Identity;
  siteGroup?: SharePointIdentity;
  siteUser?: SharePointIdentity;
}

export interface Shared {
  oDataType?: string;
  owner?: IdentitySet;
  scope?: string;
  sharedBy?: IdentitySet;
  /** @format date-time */
  sharedDateTime?: string;
}

export interface SharedInsight {
  oDataType?: string;
  id?: string;
  lastShared?: SharingDetail;
  resourceReference?: ResourceReference;
  resourceVisualization?: ResourceVisualization;
  sharingHistory?: SharingDetail[];
  lastSharedMethod?: Entity;
  resource?: Entity;
}

export interface SharedInsightCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SharedInsightCollectionRequestBuilder;
  currentPage?: SharedInsight[];
}

export interface SharedInsightCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SharedWithChannelTeamInfo {
  oDataType?: string;
  id?: string;
  displayName?: string;
  tenantId?: string;
  team?: Team;
  isHostTeam?: boolean;
  allowedMembers?: ConversationMemberCollectionPage;
}

export interface SharedWithChannelTeamInfoCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SharedWithChannelTeamInfoCollectionRequestBuilder;
  currentPage?: SharedWithChannelTeamInfo[];
}

export interface SharedWithChannelTeamInfoCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SharepointIds {
  oDataType?: string;
  listId?: string;
  listItemId?: string;
  listItemUniqueId?: string;
  siteId?: string;
  siteUrl?: string;
  tenantId?: string;
  webId?: string;
}

export interface SharingDetail {
  oDataType?: string;
  sharedBy?: InsightIdentity;
  /** @format date-time */
  sharedDateTime?: string;
  sharingReference?: ResourceReference;
  sharingSubject?: string;
  sharingType?: string;
}

export interface SharingInvitation {
  oDataType?: string;
  email?: string;
  invitedBy?: IdentitySet;
  redeemedBy?: string;
  signInRequired?: boolean;
}

export interface SharingLink {
  oDataType?: string;
  application?: Identity;
  preventsDownload?: boolean;
  scope?: string;
  type?: string;
  webHtml?: string;
  webUrl?: string;
}

export interface Shift {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  draftShift?: ShiftItem;
  schedulingGroupId?: string;
  sharedShift?: ShiftItem;
  userId?: string;
}

export interface ShiftActivity {
  oDataType?: string;
  code?: string;
  displayName?: string;
  /** @format date-time */
  endDateTime?: string;
  isPaid?: boolean;
  /** @format date-time */
  startDateTime?: string;
  theme?:
    | "WHITE"
    | "BLUE"
    | "GREEN"
    | "PURPLE"
    | "PINK"
    | "YELLOW"
    | "GRAY"
    | "DARK_BLUE"
    | "DARK_GREEN"
    | "DARK_PURPLE"
    | "DARK_PINK"
    | "DARK_YELLOW"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
}

export interface ShiftAvailability {
  oDataType?: string;
  recurrence?: PatternedRecurrence;
  timeSlots?: TimeRange[];
  timeZone?: string;
}

export interface ShiftCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ShiftCollectionRequestBuilder;
  currentPage?: Shift[];
}

export interface ShiftCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface ShiftItem {
  oDataType?: string;
  /** @format date-time */
  endDateTime?: string;
  /** @format date-time */
  startDateTime?: string;
  theme?:
    | "WHITE"
    | "BLUE"
    | "GREEN"
    | "PURPLE"
    | "PINK"
    | "YELLOW"
    | "GRAY"
    | "DARK_BLUE"
    | "DARK_GREEN"
    | "DARK_PURPLE"
    | "DARK_PINK"
    | "DARK_YELLOW"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  activities?: ShiftActivity[];
  displayName?: string;
  notes?: string;
}

export interface ShiftPreferences {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  availability?: ShiftAvailability[];
}

export interface SignInActivity {
  oDataType?: string;
  /** @format date-time */
  lastNonInteractiveSignInDateTime?: string;
  lastNonInteractiveSignInRequestId?: string;
  /** @format date-time */
  lastSignInDateTime?: string;
  lastSignInRequestId?: string;
}

export interface SingleValueLegacyExtendedProperty {
  oDataType?: string;
  id?: string;
  value?: string;
}

export interface SingleValueLegacyExtendedPropertyCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SingleValueLegacyExtendedPropertyCollectionRequestBuilder;
  currentPage?: SingleValueLegacyExtendedProperty[];
}

export interface SingleValueLegacyExtendedPropertyCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Site {
  oDataType?: string;
  id?: string;
  createdBy?: IdentitySet;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  displayName?: string;
  error?: PublicError;
  isPersonalSite?: boolean;
  root?: Root;
  sharepointIds?: SharepointIds;
  siteCollection?: SiteCollection;
  analytics?: ItemAnalytics;
  columns?: ColumnDefinitionCollectionPage;
  contentTypes?: ContentTypeCollectionPage;
  drive?: Drive;
  drives?: DriveCollectionPage;
  externalColumns?: ColumnDefinitionCollectionPage;
  items?: BaseItemCollectionPage;
  lists?: ListCollectionPage;
  operations?: RichLongRunningOperationCollectionPage;
  permissions?: PermissionCollectionPage;
  sites?: SiteCollectionPage;
  termStore?: Store;
  termStores?: StoreCollectionPage;
  onenote?: Onenote;
}

export interface SiteCollection {
  oDataType?: string;
  dataLocationCode?: string;
  hostname?: string;
  root?: Root;
}

export interface SiteCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SiteCollectionRequestBuilder;
  currentPage?: Site[];
}

export interface SiteCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
  allSites?: SiteGetAllSitesCollectionRequestBuilder;
}

export interface SiteGetAllSitesCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SizeRange {
  oDataType?: string;
  /** @format int32 */
  maximumSize?: number;
  /** @format int32 */
  minimumSize?: number;
}

export interface SoftwareOathAuthenticationMethod {
  oDataType?: string;
  id?: string;
  secretKey?: string;
}

export interface SoftwareOathAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SoftwareOathAuthenticationMethodCollectionRequestBuilder;
  currentPage?: SoftwareOathAuthenticationMethod[];
}

export interface SoftwareOathAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SpecialFolder {
  oDataType?: string;
  name?: string;
}

export interface StoragePlanInformation {
  oDataType?: string;
  upgradeAvailable?: boolean;
}

export interface Store {
  oDataType?: string;
  id?: string;
  defaultLanguageTag?: string;
  languageTags?: string[];
  groups?: GroupCollectionPage;
  sets?: SetCollectionPage;
}

export interface StoreCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: StoreCollectionRequestBuilder;
  currentPage?: Store[];
}

export interface StoreCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Subscription {
  oDataType?: string;
  id?: string;
  applicationId?: string;
  changeType?: string;
  clientState?: string;
  creatorId?: string;
  encryptionCertificate?: string;
  encryptionCertificateId?: string;
  /** @format date-time */
  expirationDateTime?: string;
  includeResourceData?: boolean;
  latestSupportedTlsVersion?: string;
  lifecycleNotificationUrl?: string;
  notificationQueryOptions?: string;
  notificationUrl?: string;
  notificationUrlAppId?: string;
  resource?: string;
}

export interface SubscriptionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SubscriptionCollectionRequestBuilder;
  currentPage?: Subscription[];
}

export interface SubscriptionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SwapShiftsChangeRequest {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  assignedTo?: "SENDER" | "RECIPIENT" | "MANAGER" | "SYSTEM" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  managerActionDateTime?: string;
  managerActionMessage?: string;
  managerUserId?: string;
  /** @format date-time */
  senderDateTime?: string;
  senderMessage?: string;
  senderUserId?: string;
  state?: "PENDING" | "APPROVED" | "DECLINED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  recipientActionDateTime?: string;
  recipientActionMessage?: string;
  recipientUserId?: string;
  senderShiftId?: string;
  recipientShiftId?: string;
}

export interface SwapShiftsChangeRequestCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: SwapShiftsChangeRequestCollectionRequestBuilder;
  currentPage?: SwapShiftsChangeRequest[];
}

export interface SwapShiftsChangeRequestCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface SystemFacet {
  oDataType?: string;
}

export interface Team {
  oDataType?: string;
  id?: string;
  classification?: string;
  /** @format date-time */
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  funSettings?: TeamFunSettings;
  guestSettings?: TeamGuestSettings;
  internalId?: string;
  isArchived?: boolean;
  memberSettings?: TeamMemberSettings;
  messagingSettings?: TeamMessagingSettings;
  specialization?:
    | "NONE"
    | "EDUCATION_STANDARD"
    | "EDUCATION_CLASS"
    | "EDUCATION_PROFESSIONAL_LEARNING_COMMUNITY"
    | "EDUCATION_STAFF"
    | "HEALTHCARE_STANDARD"
    | "HEALTHCARE_CARE_COORDINATION"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  summary?: TeamSummary;
  tenantId?: string;
  visibility?: "PRIVATE" | "PUBLIC" | "HIDDEN_MEMBERSHIP" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  webUrl?: string;
  allChannels?: ChannelCollectionPage;
  channels?: ChannelCollectionPage;
  group?: Group;
  incomingChannels?: ChannelCollectionPage;
  installedApps?: TeamsAppInstallationCollectionPage;
  members?: ConversationMemberCollectionPage;
  operations?: TeamsAsyncOperationCollectionPage;
  permissionGrants?: ResourceSpecificPermissionGrantCollectionPage;
  photo?: ProfilePhoto;
  primaryChannel?: Channel;
  tags?: TeamworkTagCollectionPage;
  template?: TeamsTemplate;
  schedule?: Schedule;
}

export interface TeamCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamCollectionRequestBuilder;
  currentPage?: Team[];
}

export interface TeamCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
  allMessages?: TeamGetAllMessagesCollectionRequestBuilder;
}

export interface TeamFunSettings {
  oDataType?: string;
  allowCustomMemes?: boolean;
  allowGiphy?: boolean;
  allowStickersAndMemes?: boolean;
  giphyContentRating?: "STRICT" | "MODERATE" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface TeamGetAllMessagesCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamGuestSettings {
  oDataType?: string;
  allowCreateUpdateChannels?: boolean;
  allowDeleteChannels?: boolean;
}

export interface TeamMemberSettings {
  oDataType?: string;
  allowAddRemoveApps?: boolean;
  allowCreatePrivateChannels?: boolean;
  allowCreateUpdateChannels?: boolean;
  allowCreateUpdateRemoveConnectors?: boolean;
  allowCreateUpdateRemoveTabs?: boolean;
  allowDeleteChannels?: boolean;
}

export interface TeamMessagingSettings {
  oDataType?: string;
  allowChannelMentions?: boolean;
  allowOwnerDeleteMessages?: boolean;
  allowTeamMentions?: boolean;
  allowUserDeleteMessages?: boolean;
  allowUserEditMessages?: boolean;
}

export interface TeamSummary {
  oDataType?: string;
  /** @format int32 */
  guestsCount?: number;
  /** @format int32 */
  membersCount?: number;
  /** @format int32 */
  ownersCount?: number;
}

export interface TeamsApp {
  oDataType?: string;
  id?: string;
  displayName?: string;
  distributionMethod?: "STORE" | "ORGANIZATION" | "SIDELOADED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  externalId?: string;
  appDefinitions?: TeamsAppDefinitionCollectionPage;
}

export interface TeamsAppAuthorization {
  oDataType?: string;
  requiredPermissionSet?: TeamsAppPermissionSet;
}

export interface TeamsAppDefinition {
  oDataType?: string;
  id?: string;
  authorization?: TeamsAppAuthorization;
  createdBy?: IdentitySet;
  description?: string;
  displayName?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  publishingState?: "SUBMITTED" | "REJECTED" | "PUBLISHED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  shortDescription?: string;
  teamsAppId?: string;
  version?: string;
  bot?: TeamworkBot;
}

export interface TeamsAppDefinitionCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamsAppDefinitionCollectionRequestBuilder;
  currentPage?: TeamsAppDefinition[];
}

export interface TeamsAppDefinitionCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamsAppInstallation {
  oDataType?: string;
  id?: string;
  consentedPermissionSet?: TeamsAppPermissionSet;
  teamsApp?: TeamsApp;
  teamsAppDefinition?: TeamsAppDefinition;
}

export interface TeamsAppInstallationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamsAppInstallationCollectionRequestBuilder;
  currentPage?: TeamsAppInstallation[];
}

export interface TeamsAppInstallationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamsAppPermissionSet {
  oDataType?: string;
  resourceSpecificPermissions?: TeamsAppResourceSpecificPermission[];
}

export interface TeamsAppResourceSpecificPermission {
  oDataType?: string;
  permissionType?: "DELEGATED" | "APPLICATION" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  permissionValue?: string;
}

export interface TeamsAsyncOperation {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  attemptsCount?: number;
  /** @format date-time */
  createdDateTime?: string;
  error?: OperationError;
  /** @format date-time */
  lastActionDateTime?: string;
  operationType?:
    | "INVALID"
    | "CLONE_TEAM"
    | "ARCHIVE_TEAM"
    | "UNARCHIVE_TEAM"
    | "CREATE_TEAM"
    | "UNKNOWN_FUTURE_VALUE"
    | "TEAMIFY_GROUP"
    | "CREATE_CHANNEL"
    | "UNEXPECTED_VALUE";
  status?:
    | "INVALID"
    | "NOT_STARTED"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  targetResourceId?: string;
  targetResourceLocation?: string;
}

export interface TeamsAsyncOperationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamsAsyncOperationCollectionRequestBuilder;
  currentPage?: TeamsAsyncOperation[];
}

export interface TeamsAsyncOperationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamsTab {
  oDataType?: string;
  id?: string;
  configuration?: TeamsTabConfiguration;
  displayName?: string;
  webUrl?: string;
  teamsApp?: TeamsApp;
}

export interface TeamsTabCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamsTabCollectionRequestBuilder;
  currentPage?: TeamsTab[];
}

export interface TeamsTabCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamsTabConfiguration {
  oDataType?: string;
  contentUrl?: string;
  entityId?: string;
  removeUrl?: string;
  websiteUrl?: string;
}

export interface TeamsTemplate {
  oDataType?: string;
  id?: string;
}

export interface TeamworkBot {
  oDataType?: string;
  id?: string;
}

export interface TeamworkConversationIdentity {
  oDataType?: string;
  displayName?: string;
  id?: string;
  conversationIdentityType?: "TEAM" | "CHANNEL" | "CHAT" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
}

export interface TeamworkOnlineMeetingInfo {
  oDataType?: string;
  calendarEventId?: string;
  joinWebUrl?: string;
  organizer?: TeamworkUserIdentity;
}

export interface TeamworkTag {
  oDataType?: string;
  id?: string;
  description?: string;
  displayName?: string;
  /** @format int32 */
  memberCount?: number;
  tagType?: "STANDARD" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  teamId?: string;
  members?: TeamworkTagMemberCollectionPage;
}

export interface TeamworkTagCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamworkTagCollectionRequestBuilder;
  currentPage?: TeamworkTag[];
}

export interface TeamworkTagCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamworkTagMember {
  oDataType?: string;
  id?: string;
  displayName?: string;
  tenantId?: string;
  userId?: string;
}

export interface TeamworkTagMemberCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TeamworkTagMemberCollectionRequestBuilder;
  currentPage?: TeamworkTagMember[];
}

export interface TeamworkTagMemberCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TeamworkUserIdentity {
  oDataType?: string;
  displayName?: string;
  id?: string;
  userIdentityType?:
    | "AAD_USER"
    | "ON_PREMISE_AAD_USER"
    | "ANONYMOUS_GUEST"
    | "FEDERATED_USER"
    | "PERSONAL_MICROSOFT_ACCOUNT_USER"
    | "SKYPE_USER"
    | "PHONE_USER"
    | "UNKNOWN_FUTURE_VALUE"
    | "EMAIL_USER"
    | "UNEXPECTED_VALUE";
}

export interface TemporaryAccessPassAuthenticationMethod {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  isUsable?: boolean;
  isUsableOnce?: boolean;
  /** @format int32 */
  lifetimeInMinutes?: number;
  methodUsabilityReason?: string;
  /** @format date-time */
  startDateTime?: string;
  temporaryAccessPass?: string;
}

export interface TemporaryAccessPassAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TemporaryAccessPassAuthenticationMethodCollectionRequestBuilder;
  currentPage?: TemporaryAccessPassAuthenticationMethod[];
}

export interface TemporaryAccessPassAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Term {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  descriptions?: LocalizedDescription[];
  labels?: LocalizedLabel[];
  /** @format date-time */
  lastModifiedDateTime?: string;
  properties?: KeyValue[];
  children?: TermCollectionPage;
  relations?: RelationCollectionPage;
  set?: Set;
}

export interface TermCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TermCollectionRequestBuilder;
  currentPage?: Term[];
}

export interface TermCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TermColumn {
  oDataType?: string;
  allowMultipleValues?: boolean;
  showFullyQualifiedName?: boolean;
  parentTerm?: Term;
  termSet?: Set;
}

export interface TextColumn {
  oDataType?: string;
  allowMultipleLines?: boolean;
  appendChangesToExistingText?: boolean;
  /** @format int32 */
  linesForEditing?: number;
  /** @format int32 */
  maxLength?: number;
  textType?: string;
}

export interface Thumbnail {
  oDataType?: string;
  /** @format int32 */
  height?: number;
  sourceItemId?: string;
  url?: string;
  /** @format int32 */
  width?: number;
}

export interface ThumbnailColumn {
  oDataType?: string;
}

export interface ThumbnailSet {
  oDataType?: string;
  id?: string;
  large?: Thumbnail;
  medium?: Thumbnail;
  small?: Thumbnail;
  source?: Thumbnail;
}

export interface ThumbnailSetCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: ThumbnailSetCollectionRequestBuilder;
  currentPage?: ThumbnailSet[];
}

export interface ThumbnailSetCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TimeOfDay {
  /** @format int32 */
  hour?: number;
  /** @format int32 */
  minute?: number;
  /** @format int32 */
  second?: number;
}

export interface TimeOff {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  draftTimeOff?: TimeOffItem;
  sharedTimeOff?: TimeOffItem;
  userId?: string;
}

export interface TimeOffCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TimeOffCollectionRequestBuilder;
  currentPage?: TimeOff[];
}

export interface TimeOffCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TimeOffItem {
  oDataType?: string;
  /** @format date-time */
  endDateTime?: string;
  /** @format date-time */
  startDateTime?: string;
  theme?:
    | "WHITE"
    | "BLUE"
    | "GREEN"
    | "PURPLE"
    | "PINK"
    | "YELLOW"
    | "GRAY"
    | "DARK_BLUE"
    | "DARK_GREEN"
    | "DARK_PURPLE"
    | "DARK_PINK"
    | "DARK_YELLOW"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  timeOffReasonId?: string;
}

export interface TimeOffReason {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  displayName?: string;
  iconType?:
    | "NONE"
    | "CAR"
    | "CALENDAR"
    | "RUNNING"
    | "PLANE"
    | "FIRST_AID"
    | "DOCTOR"
    | "NOT_WORKING"
    | "CLOCK"
    | "JURY_DUTY"
    | "GLOBE"
    | "CUP"
    | "PHONE"
    | "WEATHER"
    | "UMBRELLA"
    | "PIGGY_BANK"
    | "DOG"
    | "CAKE"
    | "TRAFFIC_CONE"
    | "PIN"
    | "SUNNY"
    | "UNKNOWN_FUTURE_VALUE"
    | "UNEXPECTED_VALUE";
  isActive?: boolean;
}

export interface TimeOffReasonCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TimeOffReasonCollectionRequestBuilder;
  currentPage?: TimeOffReason[];
}

export interface TimeOffReasonCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TimeOffRequest {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  lastModifiedBy?: IdentitySet;
  /** @format date-time */
  lastModifiedDateTime?: string;
  assignedTo?: "SENDER" | "RECIPIENT" | "MANAGER" | "SYSTEM" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  managerActionDateTime?: string;
  managerActionMessage?: string;
  managerUserId?: string;
  /** @format date-time */
  senderDateTime?: string;
  senderMessage?: string;
  senderUserId?: string;
  state?: "PENDING" | "APPROVED" | "DECLINED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  /** @format date-time */
  endDateTime?: string;
  /** @format date-time */
  startDateTime?: string;
  timeOffReasonId?: string;
}

export interface TimeOffRequestCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TimeOffRequestCollectionRequestBuilder;
  currentPage?: TimeOffRequest[];
}

export interface TimeOffRequestCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TimeRange {
  oDataType?: string;
  endTime?: TimeOfDay;
  startTime?: TimeOfDay;
}

export interface TimeSlot {
  oDataType?: string;
  end?: DateTimeTimeZone;
  start?: DateTimeTimeZone;
}

export interface TimeZoneBase {
  oDataType?: string;
  name?: string;
}

export interface Todo {
  oDataType?: string;
  id?: string;
  lists?: TodoTaskListCollectionPage;
}

export interface TodoTask {
  oDataType?: string;
  id?: string;
  body?: ItemBody;
  /** @format date-time */
  bodyLastModifiedDateTime?: string;
  categories?: string[];
  completedDateTime?: DateTimeTimeZone;
  /** @format date-time */
  createdDateTime?: string;
  dueDateTime?: DateTimeTimeZone;
  hasAttachments?: boolean;
  importance?: "LOW" | "NORMAL" | "HIGH" | "UNEXPECTED_VALUE";
  isReminderOn?: boolean;
  /** @format date-time */
  lastModifiedDateTime?: string;
  recurrence?: PatternedRecurrence;
  reminderDateTime?: DateTimeTimeZone;
  startDateTime?: DateTimeTimeZone;
  status?: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "WAITING_ON_OTHERS" | "DEFERRED" | "UNEXPECTED_VALUE";
  title?: string;
  attachments?: AttachmentBaseCollectionPage;
  attachmentSessions?: AttachmentSessionCollectionPage;
  checklistItems?: ChecklistItemCollectionPage;
  extensions?: ExtensionCollectionPage;
  linkedResources?: LinkedResourceCollectionPage;
}

export interface TodoTaskCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TodoTaskCollectionRequestBuilder;
  currentPage?: TodoTask[];
}

export interface TodoTaskCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface TodoTaskList {
  oDataType?: string;
  id?: string;
  displayName?: string;
  isOwner?: boolean;
  isShared?: boolean;
  wellknownListName?: "NONE" | "DEFAULT_LIST" | "FLAGGED_EMAILS" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  extensions?: ExtensionCollectionPage;
  tasks?: TodoTaskCollectionPage;
}

export interface TodoTaskListCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TodoTaskListCollectionRequestBuilder;
  currentPage?: TodoTaskList[];
}

export interface TodoTaskListCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface Trending {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  resourceReference?: ResourceReference;
  resourceVisualization?: ResourceVisualization;
  /** @format double */
  weight?: number;
  resource?: Entity;
}

export interface TrendingCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: TrendingCollectionRequestBuilder;
  currentPage?: Trending[];
}

export interface TrendingCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface UsageDetails {
  oDataType?: string;
  /** @format date-time */
  lastAccessedDateTime?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
}

export interface UsedInsight {
  oDataType?: string;
  id?: string;
  lastUsed?: UsageDetails;
  resourceReference?: ResourceReference;
  resourceVisualization?: ResourceVisualization;
  resource?: Entity;
}

export interface UsedInsightCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: UsedInsightCollectionRequestBuilder;
  currentPage?: UsedInsight[];
}

export interface UsedInsightCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface User {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  deletedDateTime?: string;
  signInActivity?: SignInActivity;
  accountEnabled?: boolean;
  ageGroup?: string;
  assignedLicenses?: AssignedLicense[];
  assignedPlans?: AssignedPlan[];
  authorizationInfo?: AuthorizationInfo;
  businessPhones?: string[];
  city?: string;
  companyName?: string;
  consentProvidedForMinor?: string;
  country?: string;
  /** @format date-time */
  createdDateTime?: string;
  creationType?: string;
  customSecurityAttributes?: CustomSecurityAttributeValue;
  department?: string;
  displayName?: string;
  /** @format date-time */
  employeeHireDate?: string;
  employeeId?: string;
  /** @format date-time */
  employeeLeaveDateTime?: string;
  employeeOrgData?: EmployeeOrgData;
  employeeType?: string;
  externalUserState?: string;
  /** @format date-time */
  externalUserStateChangeDateTime?: string;
  faxNumber?: string;
  givenName?: string;
  identities?: ObjectIdentity[];
  imAddresses?: string[];
  isResourceAccount?: boolean;
  jobTitle?: string;
  /** @format date-time */
  lastPasswordChangeDateTime?: string;
  legalAgeGroupClassification?: string;
  licenseAssignmentStates?: LicenseAssignmentState[];
  mail?: string;
  mailNickname?: string;
  mobilePhone?: string;
  officeLocation?: string;
  onPremisesDistinguishedName?: string;
  onPremisesDomainName?: string;
  onPremisesExtensionAttributes?: OnPremisesExtensionAttributes;
  onPremisesImmutableId?: string;
  /** @format date-time */
  onPremisesLastSyncDateTime?: string;
  onPremisesProvisioningErrors?: OnPremisesProvisioningError[];
  onPremisesSamAccountName?: string;
  onPremisesSecurityIdentifier?: string;
  onPremisesSyncEnabled?: boolean;
  onPremisesUserPrincipalName?: string;
  otherMails?: string[];
  passwordPolicies?: string;
  passwordProfile?: PasswordProfile;
  postalCode?: string;
  preferredDataLocation?: string;
  preferredLanguage?: string;
  provisionedPlans?: ProvisionedPlan[];
  proxyAddresses?: string[];
  securityIdentifier?: string;
  serviceProvisioningErrors?: ServiceProvisioningError[];
  showInAddressList?: boolean;
  /** @format date-time */
  signInSessionsValidFromDateTime?: string;
  state?: string;
  streetAddress?: string;
  surname?: string;
  usageLocation?: string;
  userPrincipalName?: string;
  userType?: string;
  mailboxSettings?: MailboxSettings;
  /** @format int32 */
  deviceEnrollmentLimit?: number;
  print?: UserPrint;
  aboutMe?: string;
  /** @format date-time */
  birthday?: string;
  /** @format date-time */
  hireDate?: string;
  interests?: string[];
  mySite?: string;
  pastProjects?: string[];
  preferredName?: string;
  responsibilities?: string[];
  schools?: string[];
  skills?: string[];
  appRoleAssignments?: AppRoleAssignmentCollectionPage;
  createdObjects?: DirectoryObjectCollectionPage;
  directReports?: DirectoryObjectCollectionPage;
  licenseDetails?: LicenseDetailsCollectionPage;
  manager?: DirectoryObject;
  memberOf?: DirectoryObjectCollectionPage;
  oauth2PermissionGrants?: OAuth2PermissionGrantCollectionPage;
  ownedDevices?: DirectoryObjectCollectionPage;
  ownedObjects?: DirectoryObjectCollectionPage;
  registeredDevices?: DirectoryObjectCollectionPage;
  scopedRoleMemberOf?: ScopedRoleMembershipCollectionPage;
  transitiveMemberOf?: DirectoryObjectCollectionPage;
  calendar?: Calendar;
  calendarGroups?: CalendarGroupCollectionPage;
  calendars?: CalendarCollectionPage;
  calendarView?: EventCollectionPage;
  contactFolders?: ContactFolderCollectionPage;
  contacts?: ContactCollectionPage;
  events?: EventCollectionPage;
  inferenceClassification?: InferenceClassification;
  mailFolders?: MailFolderCollectionPage;
  messages?: MessageCollectionPage;
  outlook?: OutlookUser;
  people?: PersonCollectionPage;
  drive?: Drive;
  drives?: DriveCollectionPage;
  followedSites?: SiteCollectionPage;
  extensions?: ExtensionCollectionPage;
  agreementAcceptances?: AgreementAcceptanceCollectionPage;
  managedDevices?: ManagedDeviceCollectionPage;
  managedAppRegistrations?: ManagedAppRegistrationCollectionPage;
  deviceManagementTroubleshootingEvents?: DeviceManagementTroubleshootingEventCollectionPage;
  planner?: PlannerUser;
  insights?: OfficeGraphInsights;
  settings?: UserSettings;
  onenote?: Onenote;
  photo?: ProfilePhoto;
  photos?: ProfilePhotoCollectionPage;
  activities?: UserActivityCollectionPage;
  onlineMeetings?: OnlineMeetingCollectionPage;
  presence?: Presence;
  authentication?: Authentication;
  chats?: ChatCollectionPage;
  joinedTeams?: TeamCollectionPage;
  teamwork?: UserTeamwork;
  todo?: Todo;
  employeeExperience?: EmployeeExperienceUser;
}

export interface UserActivity {
  oDataType?: string;
  id?: string;
  activationUrl?: string;
  activitySourceHost?: string;
  appActivityId?: string;
  appDisplayName?: string;
  contentInfo?: JsonElement;
  contentUrl?: string;
  /** @format date-time */
  createdDateTime?: string;
  /** @format date-time */
  expirationDateTime?: string;
  fallbackUrl?: string;
  /** @format date-time */
  lastModifiedDateTime?: string;
  status?: "ACTIVE" | "UPDATED" | "DELETED" | "IGNORED" | "UNKNOWN_FUTURE_VALUE" | "UNEXPECTED_VALUE";
  userTimezone?: string;
  visualElements?: VisualInfo;
  historyItems?: ActivityHistoryItemCollectionPage;
}

export interface UserActivityCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: UserActivityCollectionRequestBuilder;
  currentPage?: UserActivity[];
}

export interface UserActivityCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface UserCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: UserCollectionRequestBuilder;
  currentPage?: User[];
}

export interface UserCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface UserIdentity {
  oDataType?: string;
  displayName?: string;
  id?: string;
  ipAddress?: string;
  userPrincipalName?: string;
}

export interface UserPrint {
  oDataType?: string;
  recentPrinterShares?: PrinterShareCollectionPage;
}

export interface UserScopeTeamsAppInstallation {
  oDataType?: string;
  id?: string;
  consentedPermissionSet?: TeamsAppPermissionSet;
  teamsApp?: TeamsApp;
  teamsAppDefinition?: TeamsAppDefinition;
  chat?: Chat;
}

export interface UserScopeTeamsAppInstallationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: UserScopeTeamsAppInstallationCollectionRequestBuilder;
  currentPage?: UserScopeTeamsAppInstallation[];
}

export interface UserScopeTeamsAppInstallationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface UserSettings {
  oDataType?: string;
  id?: string;
  contributionToContentDiscoveryAsOrganizationDisabled?: boolean;
  contributionToContentDiscoveryDisabled?: boolean;
  shiftPreferences?: ShiftPreferences;
}

export interface UserTeamwork {
  oDataType?: string;
  id?: string;
  associatedTeams?: AssociatedTeamInfoCollectionPage;
  installedApps?: UserScopeTeamsAppInstallationCollectionPage;
}

export interface Video {
  oDataType?: string;
  /** @format int32 */
  audioBitsPerSample?: number;
  /** @format int32 */
  audioChannels?: number;
  audioFormat?: string;
  /** @format int32 */
  audioSamplesPerSecond?: number;
  /** @format int32 */
  bitrate?: number;
  /** @format int64 */
  duration?: number;
  fourCC?: string;
  /** @format double */
  frameRate?: number;
  /** @format int32 */
  height?: number;
  /** @format int32 */
  width?: number;
}

export interface VisualInfo {
  oDataType?: string;
  attribution?: ImageInfo;
  backgroundColor?: string;
  content?: JsonElement;
  description?: string;
  displayText?: string;
}

export interface WatermarkProtectionValues {
  oDataType?: string;
  isEnabledForContentSharing?: boolean;
  isEnabledForVideo?: boolean;
}

export interface WindowsDeviceMalwareState {
  oDataType?: string;
  id?: string;
  additionalInformationUrl?: string;
  category?:
    | "INVALID"
    | "ADWARE"
    | "SPYWARE"
    | "PASSWORD_STEALER"
    | "TROJAN_DOWNLOADER"
    | "WORM"
    | "BACKDOOR"
    | "REMOTE_ACCESS_TROJAN"
    | "TROJAN"
    | "EMAIL_FLOODER"
    | "KEYLOGGER"
    | "DIALER"
    | "MONITORING_SOFTWARE"
    | "BROWSER_MODIFIER"
    | "COOKIE"
    | "BROWSER_PLUGIN"
    | "AOL_EXPLOIT"
    | "NUKER"
    | "SECURITY_DISABLER"
    | "JOKE_PROGRAM"
    | "HOSTILE_ACTIVE_X_CONTROL"
    | "SOFTWARE_BUNDLER"
    | "STEALTH_NOTIFIER"
    | "SETTINGS_MODIFIER"
    | "TOOL_BAR"
    | "REMOTE_CONTROL_SOFTWARE"
    | "TROJAN_FTP"
    | "POTENTIAL_UNWANTED_SOFTWARE"
    | "ICQ_EXPLOIT"
    | "TROJAN_TELNET"
    | "EXPLOIT"
    | "FILESHARING_PROGRAM"
    | "MALWARE_CREATION_TOOL"
    | "TOOL"
    | "TROJAN_DENIAL_OF_SERVICE"
    | "TROJAN_DROPPER"
    | "TROJAN_MASS_MAILER"
    | "TROJAN_MONITORING_SOFTWARE"
    | "TROJAN_PROXY_SERVER"
    | "VIRUS"
    | "KNOWN"
    | "UNKNOWN"
    | "SPP"
    | "BEHAVIOR"
    | "VULNERABILITY"
    | "POLICY"
    | "ENTERPRISE_UNWANTED_SOFTWARE"
    | "RANSOM"
    | "HIPS_RULE"
    | "UNEXPECTED_VALUE";
  /** @format int32 */
  detectionCount?: number;
  displayName?: string;
  executionState?: "UNKNOWN" | "BLOCKED" | "ALLOWED" | "RUNNING" | "NOT_RUNNING" | "UNEXPECTED_VALUE";
  /** @format date-time */
  initialDetectionDateTime?: string;
  /** @format date-time */
  lastStateChangeDateTime?: string;
  severity?: "UNKNOWN" | "LOW" | "MODERATE" | "HIGH" | "SEVERE" | "UNEXPECTED_VALUE";
  state?:
    | "UNKNOWN"
    | "DETECTED"
    | "CLEANED"
    | "QUARANTINED"
    | "REMOVED"
    | "ALLOWED"
    | "BLOCKED"
    | "CLEAN_FAILED"
    | "QUARANTINE_FAILED"
    | "REMOVE_FAILED"
    | "ALLOW_FAILED"
    | "ABANDONED"
    | "BLOCK_FAILED"
    | "UNEXPECTED_VALUE";
  threatState?:
    | "ACTIVE"
    | "ACTION_FAILED"
    | "MANUAL_STEPS_REQUIRED"
    | "FULL_SCAN_REQUIRED"
    | "REBOOT_REQUIRED"
    | "REMEDIATED_WITH_NON_CRITICAL_FAILURES"
    | "QUARANTINED"
    | "REMOVED"
    | "CLEANED"
    | "ALLOWED"
    | "NO_STATUS_CLEARED"
    | "UNEXPECTED_VALUE";
}

export interface WindowsDeviceMalwareStateCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WindowsDeviceMalwareStateCollectionRequestBuilder;
  currentPage?: WindowsDeviceMalwareState[];
}

export interface WindowsDeviceMalwareStateCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WindowsHelloForBusinessAuthenticationMethod {
  oDataType?: string;
  id?: string;
  /** @format date-time */
  createdDateTime?: string;
  displayName?: string;
  keyStrength?: "NORMAL" | "WEAK" | "UNKNOWN" | "UNEXPECTED_VALUE";
  device?: Device;
}

export interface WindowsHelloForBusinessAuthenticationMethodCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WindowsHelloForBusinessAuthenticationMethodCollectionRequestBuilder;
  currentPage?: WindowsHelloForBusinessAuthenticationMethod[];
}

export interface WindowsHelloForBusinessAuthenticationMethodCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WindowsProtectionState {
  oDataType?: string;
  id?: string;
  antiMalwareVersion?: string;
  deviceState?: (
    | "CLEAN"
    | "FULL_SCAN_PENDING"
    | "REBOOT_PENDING"
    | "MANUAL_STEPS_PENDING"
    | "OFFLINE_SCAN_PENDING"
    | "CRITICAL"
    | "UNEXPECTED_VALUE"
  )[];
  engineVersion?: string;
  fullScanOverdue?: boolean;
  fullScanRequired?: boolean;
  isVirtualMachine?: boolean;
  /** @format date-time */
  lastFullScanDateTime?: string;
  lastFullScanSignatureVersion?: string;
  /** @format date-time */
  lastQuickScanDateTime?: string;
  lastQuickScanSignatureVersion?: string;
  /** @format date-time */
  lastReportedDateTime?: string;
  malwareProtectionEnabled?: boolean;
  networkInspectionSystemEnabled?: boolean;
  productStatus?: (
    | "NO_STATUS"
    | "SERVICE_NOT_RUNNING"
    | "SERVICE_STARTED_WITHOUT_MALWARE_PROTECTION"
    | "PENDING_FULL_SCAN_DUE_TO_THREAT_ACTION"
    | "PENDING_REBOOT_DUE_TO_THREAT_ACTION"
    | "PENDING_MANUAL_STEPS_DUE_TO_THREAT_ACTION"
    | "AV_SIGNATURES_OUT_OF_DATE"
    | "AS_SIGNATURES_OUT_OF_DATE"
    | "NO_QUICK_SCAN_HAPPENED_FOR_SPECIFIED_PERIOD"
    | "NO_FULL_SCAN_HAPPENED_FOR_SPECIFIED_PERIOD"
    | "SYSTEM_INITIATED_SCAN_IN_PROGRESS"
    | "SYSTEM_INITIATED_CLEAN_IN_PROGRESS"
    | "SAMPLES_PENDING_SUBMISSION"
    | "PRODUCT_RUNNING_IN_EVALUATION_MODE"
    | "PRODUCT_RUNNING_IN_NON_GENUINE_MODE"
    | "PRODUCT_EXPIRED"
    | "OFFLINE_SCAN_REQUIRED"
    | "SERVICE_SHUTDOWN_AS_PART_OF_SYSTEM_SHUTDOWN"
    | "THREAT_REMEDIATION_FAILED_CRITICALLY"
    | "THREAT_REMEDIATION_FAILED_NON_CRITICALLY"
    | "NO_STATUS_FLAGS_SET"
    | "PLATFORM_OUT_OF_DATE"
    | "PLATFORM_UPDATE_IN_PROGRESS"
    | "PLATFORM_ABOUT_TO_BE_OUTDATED"
    | "SIGNATURE_OR_PLATFORM_END_OF_LIFE_IS_PAST_OR_IS_IMPENDING"
    | "WINDOWS_S_MODE_SIGNATURES_IN_USE_ON_NON_WIN10_S_INSTALL"
    | "UNEXPECTED_VALUE"
  )[];
  quickScanOverdue?: boolean;
  realTimeProtectionEnabled?: boolean;
  rebootRequired?: boolean;
  signatureUpdateOverdue?: boolean;
  signatureVersion?: string;
  tamperProtectionEnabled?: boolean;
  detectedMalwareState?: WindowsDeviceMalwareStateCollectionPage;
}

export interface Workbook {
  oDataType?: string;
  id?: string;
  application?: WorkbookApplication;
  comments?: WorkbookCommentCollectionPage;
  functions?: WorkbookFunctions;
  names?: WorkbookNamedItemCollectionPage;
  operations?: WorkbookOperationCollectionPage;
  tables?: WorkbookTableCollectionPage;
  worksheets?: WorkbookWorksheetCollectionPage;
}

export interface WorkbookApplication {
  oDataType?: string;
  id?: string;
  calculationMode?: string;
}

export interface WorkbookChart {
  oDataType?: string;
  id?: string;
  /** @format double */
  height?: number;
  /** @format double */
  left?: number;
  name?: string;
  /** @format double */
  top?: number;
  /** @format double */
  width?: number;
  axes?: WorkbookChartAxes;
  dataLabels?: WorkbookChartDataLabels;
  format?: WorkbookChartAreaFormat;
  legend?: WorkbookChartLegend;
  series?: WorkbookChartSeriesCollectionPage;
  title?: WorkbookChartTitle;
  worksheet?: WorkbookWorksheet;
}

export interface WorkbookChartAreaFormat {
  oDataType?: string;
  id?: string;
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
}

export interface WorkbookChartAxes {
  oDataType?: string;
  id?: string;
  categoryAxis?: WorkbookChartAxis;
  seriesAxis?: WorkbookChartAxis;
  valueAxis?: WorkbookChartAxis;
}

export interface WorkbookChartAxis {
  oDataType?: string;
  id?: string;
  majorUnit?: JsonElement;
  maximum?: JsonElement;
  minimum?: JsonElement;
  minorUnit?: JsonElement;
  format?: WorkbookChartAxisFormat;
  majorGridlines?: WorkbookChartGridlines;
  minorGridlines?: WorkbookChartGridlines;
  title?: WorkbookChartAxisTitle;
}

export interface WorkbookChartAxisFormat {
  oDataType?: string;
  id?: string;
  font?: WorkbookChartFont;
  line?: WorkbookChartLineFormat;
}

export interface WorkbookChartAxisTitle {
  oDataType?: string;
  id?: string;
  text?: string;
  visible?: boolean;
  format?: WorkbookChartAxisTitleFormat;
}

export interface WorkbookChartAxisTitleFormat {
  oDataType?: string;
  id?: string;
  font?: WorkbookChartFont;
}

export interface WorkbookChartCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookChartCollectionRequestBuilder;
  currentPage?: WorkbookChart[];
}

export interface WorkbookChartCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookChartDataLabelFormat {
  oDataType?: string;
  id?: string;
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
}

export interface WorkbookChartDataLabels {
  oDataType?: string;
  id?: string;
  position?: string;
  separator?: string;
  showBubbleSize?: boolean;
  showCategoryName?: boolean;
  showLegendKey?: boolean;
  showPercentage?: boolean;
  showSeriesName?: boolean;
  showValue?: boolean;
  format?: WorkbookChartDataLabelFormat;
}

export interface WorkbookChartFill {
  oDataType?: string;
  id?: string;
}

export interface WorkbookChartFont {
  oDataType?: string;
  id?: string;
  bold?: boolean;
  color?: string;
  italic?: boolean;
  name?: string;
  /** @format double */
  size?: number;
  underline?: string;
}

export interface WorkbookChartGridlines {
  oDataType?: string;
  id?: string;
  visible?: boolean;
  format?: WorkbookChartGridlinesFormat;
}

export interface WorkbookChartGridlinesFormat {
  oDataType?: string;
  id?: string;
  line?: WorkbookChartLineFormat;
}

export interface WorkbookChartLegend {
  oDataType?: string;
  id?: string;
  overlay?: boolean;
  position?: string;
  visible?: boolean;
  format?: WorkbookChartLegendFormat;
}

export interface WorkbookChartLegendFormat {
  oDataType?: string;
  id?: string;
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
}

export interface WorkbookChartLineFormat {
  oDataType?: string;
  id?: string;
  color?: string;
}

export interface WorkbookChartPoint {
  oDataType?: string;
  id?: string;
  value?: JsonElement;
  format?: WorkbookChartPointFormat;
}

export interface WorkbookChartPointCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookChartPointCollectionRequestBuilder;
  currentPage?: WorkbookChartPoint[];
}

export interface WorkbookChartPointCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookChartPointFormat {
  oDataType?: string;
  id?: string;
  fill?: WorkbookChartFill;
}

export interface WorkbookChartSeries {
  oDataType?: string;
  id?: string;
  name?: string;
  format?: WorkbookChartSeriesFormat;
  points?: WorkbookChartPointCollectionPage;
}

export interface WorkbookChartSeriesCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookChartSeriesCollectionRequestBuilder;
  currentPage?: WorkbookChartSeries[];
}

export interface WorkbookChartSeriesCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookChartSeriesFormat {
  oDataType?: string;
  id?: string;
  fill?: WorkbookChartFill;
  line?: WorkbookChartLineFormat;
}

export interface WorkbookChartTitle {
  oDataType?: string;
  id?: string;
  overlay?: boolean;
  text?: string;
  visible?: boolean;
  format?: WorkbookChartTitleFormat;
}

export interface WorkbookChartTitleFormat {
  oDataType?: string;
  id?: string;
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
}

export interface WorkbookComment {
  oDataType?: string;
  id?: string;
  content?: string;
  contentType?: string;
  replies?: WorkbookCommentReplyCollectionPage;
}

export interface WorkbookCommentCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookCommentCollectionRequestBuilder;
  currentPage?: WorkbookComment[];
}

export interface WorkbookCommentCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookCommentReply {
  oDataType?: string;
  id?: string;
  content?: string;
  contentType?: string;
}

export interface WorkbookCommentReplyCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookCommentReplyCollectionRequestBuilder;
  currentPage?: WorkbookCommentReply[];
}

export interface WorkbookCommentReplyCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookFilter {
  oDataType?: string;
  id?: string;
  criteria?: WorkbookFilterCriteria;
}

export interface WorkbookFilterCriteria {
  oDataType?: string;
  color?: string;
  criterion1?: string;
  criterion2?: string;
  dynamicCriteria?: string;
  filterOn?: string;
  icon?: WorkbookIcon;
  operator?: string;
  values?: JsonElement;
}

export interface WorkbookFunctions {
  oDataType?: string;
  id?: string;
}

export interface WorkbookIcon {
  oDataType?: string;
  /** @format int32 */
  index?: number;
  set?: string;
}

export interface WorkbookNamedItem {
  oDataType?: string;
  id?: string;
  comment?: string;
  name?: string;
  scope?: string;
  type?: string;
  value?: JsonElement;
  visible?: boolean;
  worksheet?: WorkbookWorksheet;
}

export interface WorkbookNamedItemCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookNamedItemCollectionRequestBuilder;
  currentPage?: WorkbookNamedItem[];
}

export interface WorkbookNamedItemCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookOperation {
  oDataType?: string;
  id?: string;
  error?: WorkbookOperationError;
  resourceLocation?: string;
  status?: "NOT_STARTED" | "RUNNING" | "SUCCEEDED" | "FAILED" | "UNEXPECTED_VALUE";
}

export interface WorkbookOperationCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookOperationCollectionRequestBuilder;
  currentPage?: WorkbookOperation[];
}

export interface WorkbookOperationCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookOperationError {
  oDataType?: string;
  code?: string;
  innerError?: WorkbookOperationError;
  message?: string;
}

export interface WorkbookPivotTable {
  oDataType?: string;
  id?: string;
  name?: string;
  worksheet?: WorkbookWorksheet;
}

export interface WorkbookPivotTableCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookPivotTableCollectionRequestBuilder;
  currentPage?: WorkbookPivotTable[];
}

export interface WorkbookPivotTableCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookSortField {
  oDataType?: string;
  ascending?: boolean;
  color?: string;
  dataOption?: string;
  icon?: WorkbookIcon;
  /** @format int32 */
  key?: number;
  sortOn?: string;
}

export interface WorkbookTable {
  oDataType?: string;
  id?: string;
  highlightFirstColumn?: boolean;
  highlightLastColumn?: boolean;
  legacyId?: string;
  name?: string;
  showBandedColumns?: boolean;
  showBandedRows?: boolean;
  showFilterButton?: boolean;
  showHeaders?: boolean;
  showTotals?: boolean;
  style?: string;
  columns?: WorkbookTableColumnCollectionPage;
  rows?: WorkbookTableRowCollectionPage;
  sort?: WorkbookTableSort;
  worksheet?: WorkbookWorksheet;
}

export interface WorkbookTableCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookTableCollectionRequestBuilder;
  currentPage?: WorkbookTable[];
}

export interface WorkbookTableCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookTableColumn {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  index?: number;
  name?: string;
  values?: JsonElement;
  filter?: WorkbookFilter;
}

export interface WorkbookTableColumnCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookTableColumnCollectionRequestBuilder;
  currentPage?: WorkbookTableColumn[];
}

export interface WorkbookTableColumnCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookTableRow {
  oDataType?: string;
  id?: string;
  /** @format int32 */
  index?: number;
  values?: JsonElement;
}

export interface WorkbookTableRowCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookTableRowCollectionRequestBuilder;
  currentPage?: WorkbookTableRow[];
}

export interface WorkbookTableRowCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookTableSort {
  oDataType?: string;
  id?: string;
  fields?: WorkbookSortField[];
  matchCase?: boolean;
  method?: string;
}

export interface WorkbookWorksheet {
  oDataType?: string;
  id?: string;
  name?: string;
  /** @format int32 */
  position?: number;
  visibility?: string;
  charts?: WorkbookChartCollectionPage;
  names?: WorkbookNamedItemCollectionPage;
  pivotTables?: WorkbookPivotTableCollectionPage;
  protection?: WorkbookWorksheetProtection;
  tables?: WorkbookTableCollectionPage;
}

export interface WorkbookWorksheetCollectionPage {
  /** @format int64 */
  count?: number;
  nextPage?: WorkbookWorksheetCollectionRequestBuilder;
  currentPage?: WorkbookWorksheet[];
}

export interface WorkbookWorksheetCollectionRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}

export interface WorkbookWorksheetProtection {
  oDataType?: string;
  id?: string;
  options?: WorkbookWorksheetProtectionOptions;
  msgraphProtected?: boolean;
}

export interface WorkbookWorksheetProtectionOptions {
  oDataType?: string;
  allowAutoFilter?: boolean;
  allowDeleteColumns?: boolean;
  allowDeleteRows?: boolean;
  allowFormatCells?: boolean;
  allowFormatColumns?: boolean;
  allowFormatRows?: boolean;
  allowInsertColumns?: boolean;
  allowInsertHyperlinks?: boolean;
  allowInsertRows?: boolean;
  allowPivotTables?: boolean;
  allowSort?: boolean;
}

export interface WorkingHours {
  oDataType?: string;
  daysOfWeek?: (
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "UNEXPECTED_VALUE"
  )[];
  endTime?: TimeOfDay;
  startTime?: TimeOfDay;
  timeZone?: TimeZoneBase;
}

export interface AddressStandardClaim {
  country?: string;
  region?: string;
  locality?: string;
  formatted?: string;
  streetAddress?: string;
  postalCode?: string;
}

export interface GrantedAuthority {
  authority?: string;
}

export interface OidcIdToken {
  tokenValue?: string;
  /** @format date-time */
  issuedAt?: string;
  /** @format date-time */
  expiresAt?: string;
  claims?: Record<string, object>;
  nonce?: string;
  /** @format url */
  issuer?: string;
  subject?: string;
  authenticationContextClass?: string;
  authenticationMethods?: string[];
  authorizationCodeHash?: string;
  audience?: string[];
  /** @format date-time */
  authenticatedAt?: string;
  authorizedParty?: string;
  accessTokenHash?: string;
  address?: AddressStandardClaim;
  locale?: string;
  zoneInfo?: string;
  fullName?: string;
  givenName?: string;
  profile?: string;
  preferredUsername?: string;
  phoneNumberVerified?: boolean;
  birthdate?: string;
  website?: string;
  email?: string;
  nickName?: string;
  picture?: string;
  phoneNumber?: string;
  /** @format date-time */
  updatedAt?: string;
  familyName?: string;
  emailVerified?: boolean;
  gender?: string;
  middleName?: string;
}

export interface OidcUser {
  userInfo?: OidcUserInfo;
  idToken?: OidcIdToken;
  claims?: Record<string, object>;
  attributes?: Record<string, object>;
  authorities?: GrantedAuthority[];
  name?: string;
  nonce?: string;
  /** @format url */
  issuer?: string;
  subject?: string;
  authenticationContextClass?: string;
  authenticationMethods?: string[];
  authorizationCodeHash?: string;
  audience?: string[];
  /** @format date-time */
  expiresAt?: string;
  /** @format date-time */
  issuedAt?: string;
  /** @format date-time */
  authenticatedAt?: string;
  authorizedParty?: string;
  accessTokenHash?: string;
  address?: AddressStandardClaim;
  locale?: string;
  zoneInfo?: string;
  fullName?: string;
  givenName?: string;
  profile?: string;
  preferredUsername?: string;
  phoneNumberVerified?: boolean;
  birthdate?: string;
  website?: string;
  email?: string;
  nickName?: string;
  picture?: string;
  phoneNumber?: string;
  /** @format date-time */
  updatedAt?: string;
  familyName?: string;
  emailVerified?: boolean;
  gender?: string;
  middleName?: string;
}

export interface OidcUserInfo {
  claims?: Record<string, object>;
  address?: AddressStandardClaim;
  locale?: string;
  zoneInfo?: string;
  fullName?: string;
  givenName?: string;
  subject?: string;
  profile?: string;
  preferredUsername?: string;
  phoneNumberVerified?: boolean;
  birthdate?: string;
  website?: string;
  email?: string;
  nickName?: string;
  picture?: string;
  phoneNumber?: string;
  /** @format date-time */
  updatedAt?: string;
  familyName?: string;
  emailVerified?: boolean;
  gender?: string;
  middleName?: string;
}

export interface DirectoryObjectCollectionWithReferencesPage {
  /** @format int64 */
  count?: number;
  nextPage?: DirectoryObjectCollectionWithReferencesRequestBuilder;
  currentPage?: DirectoryObject[];
}

export interface DirectoryObjectCollectionWithReferencesRequestBuilder {
  client?: IBaseClientObject;
  requestUrl?: string;
}
