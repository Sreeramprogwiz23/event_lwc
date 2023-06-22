public with sharing class recordshowapexcases {
    @AuraEnabled(cacheable=true)
    public static List<case> getRelatedCases(id accountId) {
        return [SELECT Id, CaseNumber, OwnerId, Status FROM case WHERE AccountId = :accountId];
    }
}